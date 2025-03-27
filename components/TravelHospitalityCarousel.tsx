"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Slider from "react-slick";
// Importa los estilos de react-slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
      src: "/images/corporate1.png",
      title: t("galleryItems.conferencesAndCongressesTitle"),
      description: t("galleryItems.conferencesAndCongressesDescription"),
    },
    {
      src: "/images/corporate2.png",
      title: t("galleryItems.productsReleasesTitle"),
      description: t("galleryItems.productsReleasesDescription"),
    },
    {
      src: "/images/corporate3.png",
      title: t("galleryItems.brandExpiriencesTitle"),
      description: t("galleryItems.brandExpiriencesDescription"),
    },
  ];

  const slide3Items = [
    {
      src: "/images/tailor1.png",
      title: t("galleryItems.fundPositioningTitle"),
      description: t("galleryItems.fundPositioningDescription"),
    },
    {
      src: "/images/tailor2.png",
      title: t("galleryItems.financialInnovationForumsAndSummitsTitle"),
      description: t(
        "galleryItems.financialInnovationForumsAndSummitsDescription"
      ),
    },
    {
      src: "/images/tailor3.png",
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
    autoplay: true, // Autoplay activado
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
                      className="rounded-lg shadow-lg object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
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
