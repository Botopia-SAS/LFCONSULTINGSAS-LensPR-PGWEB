"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";;
// Importamos los íconos que usaremos
import { ChevronLeft, ChevronRight } from "lucide-react"

type GalleryItem = {
  src: string;
  title: string;
  description: string;
};

export default function ServicesSection() {
  const t = useTranslations("services"); // Namespace "services"
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con las imágenes del carrusel
  const galleryItems: GalleryItem[] = [
    {
      src: "/images/diseñocontenidografico.png",
      title: "Evento 1",
      description: "Descripción breve del evento 1",
    },
    {
      src: "/images/free-press.png",
      title: "Evento 2",
      description: "Descripción breve del evento 2",
    },
    {
      src: "/images/eventostaylormade.png",
      title: "Evento 3",
      description: "Descripción breve del evento 3",
    },
    {
      src: "/images/press-4.jpg",
      title: "Evento 4",
      description: "Descripción breve del evento 4",
    },
    // Agrega más si lo deseas
  ];

  // Cuántas slides se muestran a la vez
  const slidesToShow = 3;

  // Índice máximo al que podemos desplazarnos sin dejar "huecos vacíos"
  // Si tienes 4 items y muestras 3, el maxIndex es 1.
  const maxIndex = galleryItems.length - slidesToShow;

  // Navegar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Navegar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Contenedor principal en una sola fila */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Bloque de texto (ajusta w-1/2 en pantallas grandes) */}
        <div className="md:w-1/2">
          <h3 className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300">
            {t("clientsIndustries")}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mt-2">
            {t("pressVisibility")}
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-3xl">
            {t("description")}
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-sm font-semibold text-black dark:text-white hover:text-orange-400 transition-colors"
          >
            {t("seeAllClients")}
          </a>
        </div>

        {/* Bloque del carrusel (ajusta w-1/2 en pantallas grandes) */}
        <div className="md:w-1/2">
          {/* Contenedor del carrusel */}
          <div className="w-full overflow-hidden">
            {/* 
              Contenedor de todos los slides.
              - width se multiplica por (100% / 3) * nº de items = nº de items * 33.3333%
              - transform usa currentIndex * 33.3333% para desplazar.
            */}
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${galleryItems.length * 33.3333}%`,
                transform: `translateX(-${currentIndex * 33.3333}%)`,
              }}
            >
              {galleryItems.map((item, index) => (
                // Cada slide ocupa 33.3333% del contenedor
                <div
                  key={index}
                  className="w-[33.3333%] flex-shrink-0 flex justify-center p-2 box-border"
                >
                  {/* Contenido de cada slide */}
                  <div className="relative group w-full max-w-[280px]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={280}
                      height={280}
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
                </div>
              ))}
            </div>
          </div>

          {/* Flechas de navegación, ahora abajo del carrusel */}
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
