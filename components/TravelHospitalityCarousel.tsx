"use client";

import React from "react";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Componente para slides 2 y 3 (o más)
import TravelHospitalitySection from "./CredibilitySection";

// Importa los estilos de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TravelHospitalityCarousel() {
  const t = useTranslations("travelHospitality");

  // Items para la parte de imágenes del SLIDE 1
  const galleryItems = [
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.designContentTitle"),
      description: t("galleryItems.designContentDescription"),
    },
    {
      src: "/images/press-4.png",
      title: t("galleryItems.freePressTitle"),
      description: t("galleryItems.freePressDescription"),
    },
    {
      src: "/images/eventostaylormade.png",
      title: t("galleryItems.eventsTitle"),
      description: t("galleryItems.eventsDescription"),
    },
  ];

  const slide2Items = [
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.conferencesAndCongressesTitle"),
      description: t("galleryItems.conferencesAndCongressesDescription"),
    },
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.productsReleasesTitle"),
      description: t("galleryItems.productsReleasesDescription"),
    },
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.brandExpiriencesTitle"),
      description: t("galleryItems.brandExpiriencesDescription"),
    },
  ];

  const slide3Items = [
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.fundPositioningTitle"),
      description: t("galleryItems.fundPositioningDescription"),
    },
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.financialInnovationForumsAndSummitsTitle"),
      description: t(
        "galleryItems.financialInnovationForumsAndSummitsDescription"
      ),
    },
    {
      src: "/images/diseñocontenidografico.png",
      title: t("galleryItems.strategicAlliancesAndHighImpactNetworkingTitle"),
      description: t(
        "galleryItems.strategicAlliancesAndHighImpactNetworkingDescription"
      ),
    },
  ];

  // Configuración de react-slick
  const settings = {
    dots: true, // Puntos de paginación
    arrows: true, // Flechas laterales
    infinite: true, // Loop infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Un slide a la vez
    slidesToScroll: 1, // Un slide por avance
    autoplay: false, // Autoplay activado
    autoplaySpeed: 4000, // Cambio cada 4 segundos
  };

  return (
    // Este contenedor envuelve todo el carrusel y lo centra con un ancho máximo
    <div className="max-w-6xl mx-auto dark:bg-zinc-900  px-8 rounded-lg">
      <Slider {...settings}>
        {/* ============================
            SLIDE 1: Texto + Galería de imágenes
            ============================ */}
        <div>
          {/* Quitamos el max-w y mx-auto internos para que el slide use todo el ancho del contenedor */}
          <div className="px-4 sm:px-8 py-16">
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

              {/* Columna derecha: Galería de imágenes con efecto hover */}
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
                      className="rounded-lg shadow-lg object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                      <h4 className="text-base font-bold text-white uppercase">
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
        </div>

        {/* ============================
            SLIDE 2
            ============================ */}
        <div>
          {/* Quitamos el max-w y mx-auto internos para que el slide use todo el ancho del contenedor */}
          <div className="px-4 sm:px-8 py-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {/* Columna izquierda: Texto */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mt-2">
                  {t("leftColumn.corporateEvents")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                  {t("leftColumn.corporateEventsDescription")}
                </p>
                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold text-black dark:text-white hover:text-orange-400 transition-colors"
                >
                  {t("leftColumn.seeAllEvents")}
                </a>
              </div>

              {/* Columna derecha: Galería de imágenes con efecto hover */}
              <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
                {slide2Items.map((item, index) => (
                  <div
                    key={index}
                    className="flex-1 relative group overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={320}
                      height={370}
                      className="rounded-lg shadow-lg object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                      <h4 className="text-base font-bold text-white uppercase">
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
        </div>

        {/* ============================
            SLIDE 3
            ============================ */}
        <div>
          {/* Quitamos el max-w y mx-auto internos para que el slide use todo el ancho del contenedor */}
          <div className="px-4 sm:px-8 py-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {/* Columna izquierda: Texto */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mt-2">
                  {t("leftColumn.tailorMadeProyects")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                  {t("leftColumn.tailorMadeProyectsDescription")}
                </p>
                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold text-black dark:text-white hover:text-orange-400 transition-colors"
                >
                  {t("leftColumn.seeAllProjects")}
                </a>
              </div>

              {/* Columna derecha: Galería de imágenes con efecto hover */}
              <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
                {slide3Items.map((item, index) => (
                  <div
                    key={index}
                    className="flex-1 relative group overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={320}
                      height={370}
                      className="rounded-lg shadow-lg object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                      <h4 className="text-base font-bold text-white uppercase">
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
        </div>
      </Slider>
    </div>
  );
}
