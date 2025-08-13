import { NextApiRequest, NextApiResponse } from 'next';

interface LumaEvent {
  api_id: string;
  name: string;
  description?: string;
  start_at: string;
  end_at: string;
  geo_address_json?: {
    address?: string;
    full_address?: string;
    city?: string;
  };
  url: string;
  timezone: string;
  visibility: 'public' | 'private';
  event_type?: 'online' | 'in_person' | 'hybrid';
  cover_url?: string;
  capacity?: number;
  ticket_types?: { price: number }[];
}

interface LumaEventEntry {
  api_id: string;
  event: LumaEvent;
}

interface LumaResponse {
  entries: LumaEventEntry[];
  next_cursor?: string;
}

function formatDate(dateString: string): string {
  if (!dateString) return 'Fecha no disponible';
  try {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Bogota'
    });
  } catch {
    return 'Fecha no disponible';
  }
}

function formatDuration(startDate: string, endDate: string): string {
  if (!startDate || !endDate) return 'Duración no disponible';
  try {
    const diffMs = new Date(endDate).getTime() - new Date(startDate).getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  } catch {
    return 'Duración no disponible';
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const API_KEY = process.env.NEXT_PUBLIC_LUMA_API_KEY;
  
  if (!API_KEY) {
    return res.status(500).json({ 
      error: 'API key no configurada',
      success: false 
    });
  }

  try {
    console.log('🚀 Iniciando llamada a Luma API...');
    console.log('🔑 API Key configurada:', API_KEY ? 'SÍ' : 'NO');
    
    // Construir URL con parámetros para eventos futuros
    const now = new Date();
    const todayISO = now.toISOString();
    
    console.log('🕒 Fecha actual para filtrado:', todayISO);
    
    // Intentar múltiples estrategias para obtener más eventos
    let allEntries: LumaEventEntry[] = [];
    let bestStrategy = '';
    
    // Estrategia 1: Sin parámetros adicionales (los 50 más próximos)
    console.log('🔄 Estrategia 1: Eventos más próximos (límite 50)');
    const apiUrl1 = new URL('https://public-api.luma.com/v1/calendar/list-events');
    apiUrl1.searchParams.append('after', todayISO);
    apiUrl1.searchParams.append('limit', '50');
    
    const response1 = await fetch(apiUrl1.toString(), {
      method: 'GET',
      headers: {
        'x-luma-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    
    if (response1.ok) {
      const data1: LumaResponse = await response1.json();
      console.log(`� Estrategia 1 - Eventos obtenidos: ${data1.entries?.length || 0}`);
      if (data1.entries) {
        allEntries = [...data1.entries];
        bestStrategy = 'Eventos más próximos';
        
        // Si hay cursor, intentar obtener la siguiente página
        if (data1.next_cursor && data1.next_cursor !== 'evt-Ec8Ah8S7bH64TVE') {
          console.log('🔄 Intentando segunda página con cursor diferente...');
          const apiUrl2 = new URL('https://public-api.luma.com/v1/calendar/list-events');
          apiUrl2.searchParams.append('after', todayISO);
          apiUrl2.searchParams.append('limit', '50');
          apiUrl2.searchParams.append('cursor', data1.next_cursor);
          
          const response2 = await fetch(apiUrl2.toString(), {
            method: 'GET',
            headers: {
              'x-luma-api-key': API_KEY,
              'Content-Type': 'application/json',
            },
          });
          
          if (response2.ok) {
            const data2: LumaResponse = await response2.json();
            console.log(`📊 Segunda página - Eventos obtenidos: ${data2.entries?.length || 0}`);
            
            // Verificar si son eventos diferentes
            const newEvents = data2.entries?.filter(entry => 
              !allEntries.some(existing => existing.api_id === entry.api_id)
            ) || [];
            
            if (newEvents.length > 0) {
              allEntries.push(...newEvents);
              console.log(`✅ ${newEvents.length} eventos nuevos agregados. Total: ${allEntries.length}`);
              bestStrategy = 'Múltiples páginas';
            } else {
              console.log('⚠️ Segunda página contiene los mismos eventos (cursor roto)');
            }
          }
        }
      }
    }
    
    // Estrategia 2: Intentar con fechas específicas (próximos 30 días)
    if (allEntries.length <= 50) {
      console.log('🔄 Estrategia 2: Intentando con rango de fechas extendido');
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 30); // 30 días desde hoy
      const futureDateISO = futureDate.toISOString();
      
      const apiUrl3 = new URL('https://public-api.luma.com/v1/calendar/list-events');
      apiUrl3.searchParams.append('after', todayISO);
      apiUrl3.searchParams.append('before', futureDateISO);
      apiUrl3.searchParams.append('limit', '100');
      
      const response3 = await fetch(apiUrl3.toString(), {
        method: 'GET',
        headers: {
          'x-luma-api-key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
      
      if (response3.ok) {
        const data3: LumaResponse = await response3.json();
        console.log(`📊 Estrategia 2 - Eventos en 30 días: ${data3.entries?.length || 0}`);
        
        if (data3.entries && data3.entries.length > allEntries.length) {
          allEntries = data3.entries;
          bestStrategy = 'Rango de fechas específico';
          console.log(`✅ Mejor resultado con rango de fechas: ${allEntries.length} eventos`);
        }
      }
    }
    
    console.log(`✅ Mejor estrategia: ${bestStrategy} - Total eventos: ${allEntries.length}`);
    
    // Filtrar solo eventos futuros (verificación adicional)
    const upcomingEvents = allEntries?.filter((entry: LumaEventEntry) => {
      const eventStartDate = new Date(entry.event?.start_at || '');
      const isUpcoming = eventStartDate > now;
      if (isUpcoming) {
        console.log(`📅 Evento futuro: "${entry.event?.name}" - ${entry.event?.start_at}`);
      }
      return isUpcoming;
    }) || [];
    
    console.log(`🔍 Eventos futuros encontrados: ${upcomingEvents.length}`);
    
    const mappedEvents = upcomingEvents.map((entry: LumaEventEntry) => {
      const event = entry.event;
      
      return {
        id: entry.api_id,
        name: event?.name || 'Evento sin título',
        description: event?.description || 'Sin descripción disponible',
        start_date: event?.start_at || '', // Mantener formato ISO para ordenamiento
        end_date: event?.end_at || '',
        formatted_start_date: formatDate(event?.start_at || ''),
        formatted_end_date: formatDate(event?.end_at || ''),
        duration: formatDuration(event?.start_at || '', event?.end_at || ''),
        location: event?.geo_address_json?.address || 
                  event?.geo_address_json?.full_address ||
                  (event?.event_type === 'online' ? 'Evento Virtual' : 'Ubicación por confirmar'),
        media_url: event?.cover_url || '/images/default-event.png',
        register_link: event?.url || '#',
        event_type: event?.event_type || 'in_person',
        cost: event?.ticket_types?.some((ticket: any) => ticket.price > 0) ? 'Evento de Pago' : 'Evento Gratuito',
        capacity: event?.capacity,
        city: event?.geo_address_json?.city || ''
      };
    }).sort((a: any, b: any) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime()); // Ordenar por fecha
    
    console.log(`✅ Eventos procesados y ordenados: ${mappedEvents.length}`);
    
    return res.status(200).json({
      success: true,
      events: mappedEvents,
      count: mappedEvents.length
    });

  } catch (error) {
    console.error('❌ Error en el servidor:', error);
    return res.status(500).json({
      error: 'Error interno del servidor',
      success: false
    });
  }
}
