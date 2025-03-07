"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  description: string;
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con las imágenes del carrusel
  const galleryItems: GalleryItem[] = [
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
    {
      src: "/images/press-4.jpg",
      title: t("galleryItems.press4Title"), // O usa otro alias
      description: t("galleryItems.press4Description"),
    },
  ];

  // Número de slides a mostrar en desktop (3)
  const slidesToShow = 3;
  const maxIndex = galleryItems.length - slidesToShow;

  // Funciones para navegar en el carrusel
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Bloque de texto */}
        <div className="w-full md:w-1/2">
          <h3 className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300">
            {t("clientsIndustries")}
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mt-2">
            {t("pressVisibility")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            {t("description")}
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-sm font-semibold text-black dark:text-white hover:text-orange-400 transition-colors"
          >
            {t("seeAllClients")}
          </a>
        </div>

        {/* Bloque del carrusel */}
        <div className="w-full md:w-1/2">
          {/* Contenedor del carrusel */}
          <div className="w-full overflow-hidden">
            {/* Contenedor de slides:
                - El ancho total es (nº items * 33.3333%) 
                - Se usa transform para desplazar según el currentIndex
            */}
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${galleryItems.length * 33.3333}%`,
                transform: `translateX(-${currentIndex * 33.3333}%)`,
              }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="w-[33.3333%] flex-shrink-0 flex justify-center p-2 box-border"
                >
                  <div className="relative group w-full max-w-[280px]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={280}
                      height={280}
                      className="rounded-lg shadow-lg object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      <h4 className="text-lg font-bold text-white uppercase">
                        {item.title}
                      </h4>
                      <p className="text-white text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navegación del carrusel: Flechas */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-orange-400 dark:hover:bg-orange-400 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-orange-400 dark:hover:bg-orange-400 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
