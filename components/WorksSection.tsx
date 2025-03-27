"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TravelHospitalitySection() {
  // Hook de traducciones (si usas next-intl)
  const t = useTranslations("travelHospitality");

  // Ejemplo de items para el “carrusel” interno
  const galleryItems = [
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.designContentTitle"),
      description: t("galleryItems.designContentDescription"),
    },
    {
      src: "/images/free-press.png",
      title: t("galleryItems.freePressTitle"),
      description: t("galleryItems.freePressDescription"),
    },
    {
      src: "/images/eventostaylormade.png",
      title: t("galleryItems.eventsTitle"),
      description: t("galleryItems.eventsDescription"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-zinc-900 transition-colors duration-300">
      {/* Encabezado y estadísticas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
          {t("headerTitle")}
        </h2>
        <div className="py-8">
          <div className="max-w-full mx-auto">
            {/* Línea superior con puntos */}
            <div className="relative flex items-center justify-between w-full border-t border-gray-600 pt-8">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="w-1/3 flex justify-center relative -top-10">
                    <div className="w-4 h-4 bg-zinc-900 dark:bg-white rounded-full"></div>
                  </div>
                ))}
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 text-center text-zinc-900 dark:text-white mt-8">
              <div>
                <h2 className="text-3xl font-bold">+650</h2>
                <p className="text-lg font-semibold">{t("stats.publications")}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">+50</h2>
                <p className="text-lg font-semibold">{t("stats.eventsCreated")}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">+20</h2>
                <p className="text-lg font-semibold">{t("stats.clients")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
