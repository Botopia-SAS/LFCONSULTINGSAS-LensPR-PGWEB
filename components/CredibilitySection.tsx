"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CredibilitySection() {
  const t = useTranslations("credibility");

  const images = [
    { src: "/images/forbes-example.png", alt: "Ejemplo de publicación 1" },
    { src: "/images/tekios-example.png", alt: "Ejemplo de publicación 2" },
    {
      src: "/images/el-colombiano-example.png",
      alt: "Ejemplo de publicación 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 sm:py-28 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Texto y botón */}
          <div className="w-full md:w-2/5 text-left space-y-8 md:space-y-14">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black dark:text-white">
              {t("title")}
            </h2>
            <p className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-700 dark:text-gray-300">
              {t("text")}
            </p>
            <Link
              href={"https://calendly.com/lauraforerolenspr"}
              target="_blank"
              className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-semibold rounded hover:bg-orange-400 hover:text-black transition transform hover:scale-105 hover:-translate-y-1 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t("buttonLabel")}
            </Link>
          </div>

          {/* Carrusel */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full max-w-xl h-56 sm:h-64 md:h-[350px]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                objectFit="cover"
                className="rounded-lg shadow-lg transition transform hover:scale-105 hover:translate-y-[-4px] dark:shadow-gray-800"
              />
              {/* Flecha Izquierda */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black dark:bg-white dark:text-black text-white p-2 rounded-full hover:bg-orange-400 hover:text-black transition"
              >
                &lt;
              </button>
              {/* Flecha Derecha */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black dark:bg-white dark:text-black text-white p-2 rounded-full hover:bg-orange-400 hover:text-black transition"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
