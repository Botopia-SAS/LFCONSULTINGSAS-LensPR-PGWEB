"use client";
// app/page.tsx
import React from "react";
import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import CredibilitySection from "@/components/CredibilitySection";
import WorksSection from "@/components/WorksSection";
import Paragraph from "@/components/paragraph";
import TravelHospitalityCarousel from "@/components/TravelHospitalityCarousel";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  const t = useTranslations("hero"); // <--- Obtenemos las traducciones del namespace "hero"

  const handleHeroButtonClick = () => {
    console.log("Hero button clicked");
  };

  return (
    <main>
      <Hero
        title={t("title")}            // "Guaranteed visibility" (en) | "Visibilidad garantizada" (es) ...
        subtitle={t("subtitle")}      // "In LATAM" (en) | "En LATAM" (es) ...
        buttonLabel="NA"
        videoUrl="/videos/bg-video.mp4"
        onButtonClick={handleHeroButtonClick}
      />
      <Paragraph />
      <Carousel />
      <CredibilitySection />
      <WorksSection />
      <TravelHospitalityCarousel />
    </main>
  );
}
