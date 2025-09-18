import React from 'react';
import { notFound } from 'next/navigation';
import { ENABLE_CTW } from '@/config/features';
import EventsLegacy from '@/components/EventsLegacy';
import EventsLuma from '@/components/EventsLuma';

// Esta página puede ser Server Component (quitamos 'use client')
export default function Page() {
  if (!ENABLE_CTW) {
    notFound();
  }
  const USE_LUMA = true;
  return USE_LUMA ? <EventsLuma /> : <EventsLegacy />;
}
