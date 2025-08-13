'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { getLumaEvents } from '@/app/[locale]/(helpers)/getLumaEvents';
import EventsGrid from '@/components/EventsGrid';

interface Event {
  id: string;
  name: string;
  description: string;
  start_date: string;
  formatted_start_date: string;
  duration: string;
  location: string;
  media_url?: string; // Hacer opcional para evitar error de tipos
  register_link: string;
  event_type: string;
  cost: string;
  capacity?: number;
  city: string;
}

interface EventsByDate {
  [date: string]: Event[];
}

const EventsLuma = () => {
  const t = useTranslations('Events');
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsByDate, setEventsByDate] = useState<EventsByDate>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🔄 Obteniendo eventos de Luma...');
        console.log('📍 Haciendo fetch a: /api/luma-events');
        
        const lumaEvents = await getLumaEvents();
        
        console.log('📊 Respuesta completa de la API:', lumaEvents);
        console.log('📈 Número total de eventos recibidos:', lumaEvents.length);
        
        if (lumaEvents.length === 0) {
          console.log('⚠️ No se encontraron eventos próximos en Luma');
          console.log('🕒 Fecha actual para comparación:', new Date().toISOString());
          setEvents([]);
          setEventsByDate({});
          return;
        }
        
        // Mostrar detalles de cada evento para debugging
        lumaEvents.forEach((event, index) => {
          console.log(`📅 Evento ${index + 1}:`, {
            name: event.name,
            start_date: event.start_date,
            formatted_date: event.formatted_start_date
          });
        });
        
        // Deduplicar eventos por ID para evitar duplicados
        const uniqueEvents = lumaEvents.filter((event, index, self) => 
          index === self.findIndex(e => e.id === event.id)
        );
        
        if (uniqueEvents.length !== lumaEvents.length) {
          console.log(`⚠️ Se encontraron ${lumaEvents.length - uniqueEvents.length} eventos duplicados, removidos`);
        }
        
        console.log(`✅ ${uniqueEvents.length} eventos únicos obtenidos de Luma`);
        setEvents(uniqueEvents);
        
        // Agrupar eventos por fecha
        const grouped = uniqueEvents.reduce((acc: EventsByDate, event) => {
          const eventDate = new Date(event.start_date);
          const dateKey = eventDate.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'America/Bogota'
          });
          
          if (!acc[dateKey]) {
            acc[dateKey] = [];
          }
          acc[dateKey].push(event);
          return acc;
        }, {});
        
        setEventsByDate(grouped);
        
      } catch (error) {
        console.error('❌ Error fetching events from Luma:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
        setEvents([]);
        setEventsByDate({});
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatTime = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Bogota'
      });
    } catch {
      return '';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando eventos próximos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <section className="bg-white dark:bg-zinc-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
            {t('Title')}
          </h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="text-red-600 text-xl mb-2">⚠️ Error de conexión</div>
            <p className="text-red-700 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            {t('Title')} - Próximos Eventos
          </h1>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Solo eventos próximos desde Luma
          </div>
        </div>
        
        {Object.keys(eventsByDate).length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2">
              No hay eventos próximos disponibles
            </p>
            <p className="text-gray-500">
              Los próximos eventos aparecerán aquí cuando sean publicados en Luma
            </p>
          </div>
        ) : (
          <div className="space-y-0">
            {Object.entries(eventsByDate).map(([date, dateEvents], dateIndex) => {
              // Extraer día y mes de la fecha
              const eventDate = new Date(dateEvents[0].start_date);
              const day = eventDate.getDate();
              const month = eventDate.toLocaleDateString('es-ES', { month: 'short' });
              const weekday = eventDate.toLocaleDateString('es-ES', { weekday: 'long' });
              
              return (
                <div key={date} className="flex">
                  {/* Columna de fecha fija (sticky) */}
                  <div className="flex-shrink-0 w-24 mr-6">
                    <div className={`sticky top-20 text-center bg-white dark:bg-zinc-900 py-2 z-10 ${dateIndex === 0 ? 'pt-2' : 'pt-8'}`}>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {day}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        {month}
                      </div>
                      <div className="text-xs text-gray-400 capitalize mt-1">
                        {weekday}
                      </div>
                    </div>
                  </div>

                  {/* Columna de eventos */}
                  <div className="flex-1 min-w-0">
                    <div className={`space-y-4 ${dateIndex === 0 ? 'pt-0' : 'pt-8'} pb-8`}>
                      {dateEvents.map((event, eventIndex) => (
                        <div key={`${event.id}-${eventIndex}`} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow overflow-hidden">
                          <div className="flex">
                            {/* Imagen del evento - lado izquierdo */}
                            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
                              {event.media_url && event.media_url !== '/images/default-event.png' ? (
                                <img 
                                  src={event.media_url} 
                                  alt={event.name}
                                  className="w-full h-full object-cover rounded-l-lg"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-l-lg">
                                  <span className="text-white text-xl">
                                    {event.event_type === 'online' ? '🌐' : 
                                     event.event_type === 'hybrid' ? '🔗' : '📅'}
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            {/* Contenido del evento */}
                            <div className="flex-1 p-6">
                              {/* Hora del evento */}
                              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                {formatTime(event.start_date)}
                              </div>
                              
                              {/* Título del evento */}
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 pr-4">
                                {event.name}
                              </h3>
                              
                              {/* Descripción */}
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 pr-4">
                                {event.description}
                              </p>
                            
                            {/* Metadatos del evento */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <span className="flex items-center gap-1">
                                <span>📍</span>
                                {event.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <span>�</span>
                                {event.capacity ? `${event.capacity} personas` : 'Sin límite'}
                              </span>
                            </div>
                            
                            {/* Tags de tipo y costo */}
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  event.cost === 'Evento Gratuito' 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                }`}>
                                  {event.cost}
                                </span>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                  {event.event_type === 'online' ? '🌐 Virtual' : 
                                   event.event_type === 'hybrid' ? '🔗 Híbrido' : '📍 Presencial'}
                                </span>
                              </div>
                              
                              {/* Botón de acción */}
                              <a 
                                href={event.register_link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 text-sm font-medium transition-colors"
                              >
                                Ver evento →
                              </a>
                            </div>
                          </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsLuma;
