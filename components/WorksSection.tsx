"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TravelHospitalitySection() {
  const t = useTranslations("travelHospitality");

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
                <h2 className="text-3xl font-bold">+400</h2>
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

      {/* Grid de clientes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 my-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="relative w-full h-32 sm:h-40 md:h-48">
              <Image
                src={`/images/client${i + 1}.png`}
                alt={`${t("client")} ${i + 1}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sección inferior: Texto y "carrusel" de imágenes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Columna izquierda: Texto */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mt-2">
              {t("leftColumn.pressVisibility")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              {t("leftColumn.description")}
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-sm font-semibold text-black dark:text-white hover:text-orange-400 transition-colors"
            >
              {t("leftColumn.seeAllClients")}
            </a>
          </div>

          {/* Columna derecha: "Carrusel" en escritorio */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="flex-1 relative group overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={320}
                  height={370}
                  className="rounded-lg shadow-lg object-cover w-full 
                             transition-transform duration-300 
                             group-hover:scale-105"
                />
                {/* Overlay en hover */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center
                             bg-black bg-opacity-60 text-center p-4
                             opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <h4 className="text-lg font-bold text-white uppercase">
                    {item.title}
                  </h4>
                  <p className="text-white text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
