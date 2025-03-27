"use client";

import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  videoUrl: string; // Ruta del video
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonLabel,
  videoUrl,
  onButtonClick,
}) => {
  return (
    <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white max-w-full px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-4 md:mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
