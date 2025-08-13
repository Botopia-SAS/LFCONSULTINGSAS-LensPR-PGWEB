interface LumaEvent {
  id: string;
  name: string;
  description: string;
  start_date: string; // ISO format para ordenamiento
  end_date: string;
  formatted_start_date: string; // Formato legible
  formatted_end_date: string;
  duration: string;
  location: string;
  media_url?: string;
  register_link: string;
  event_type: 'online' | 'in_person' | 'hybrid';
  cost: string;
  capacity?: number;
  city: string;
}

interface LumaAPIResponse {
  success: boolean;
  events: LumaEvent[];
  count: number;
  error?: string;
  details?: string;
}

export const getLumaEvents = async (): Promise<LumaEvent[]> => {
  try {
    console.log('🔄 Fetching events from internal API...');
    console.log('🌐 URL completa:', `${window.location.origin}/api/luma-events`);
    
    const response = await fetch('/api/luma-events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Evitar caché para obtener datos frescos
    });

    console.log('📡 Respuesta de la API:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Error desconocido' }));
      console.error(`❌ API Error: ${response.status}`, errorData);
      throw new Error(errorData.error || `Error ${response.status}`);
    }

    const data: LumaAPIResponse = await response.json();
    
    console.log('📦 Datos crudos de la API:', data);
    console.log('🔍 Análisis de la respuesta:', {
      success: data.success,
      count: data.count,
      hasEvents: data.events?.length || 0,
      eventsArray: data.events
    });
    
    if (!data.success) {
      console.error('❌ API reportó fallo:', data.error);
      throw new Error(data.error || 'Error al obtener eventos');
    }
    
    console.log(`✅ ${data.count} eventos obtenidos exitosamente`);
    return data.events;

  } catch (error) {
    console.error('❌ Error fetching Luma events:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Error de conexión - verifica tu conexión a internet');
    }
    
    throw error;
  }
};
