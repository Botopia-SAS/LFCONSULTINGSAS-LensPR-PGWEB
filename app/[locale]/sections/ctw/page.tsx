'use client';
import React from 'react';
// Importar los dos componentes
import EventsLegacy from '@/components/EventsLegacy';
import EventsLuma from '@/components/EventsLuma';

const Page = () => {
  // Cambiar esta variable para alternar entre componentes
  const USE_LUMA = true; // false = Legacy API, true = Luma/Supabase

  // Renderizar el componente correspondiente
  return USE_LUMA ? <EventsLuma /> : <EventsLegacy />;
};

export default Page;
