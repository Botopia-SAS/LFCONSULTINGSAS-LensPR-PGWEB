"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import CredibilitySection from "@/components/CredibilitySection";
import WorksSection from "@/components/WorksSection";
import Paragraph from "@/components/paragraph";
import TravelHospitalityCarousel from "@/components/TravelHospitalityCarousel";
import ClientSection from "@/components/ClientSection";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params); // ✅ Usamos React.use() para obtener el objeto real
  const locale = resolvedParams?.locale;

  const t = useTranslations("hero");
  const c = useTranslations("carousel");

  const handleHeroButtonClick = () => {
    console.log("Hero button clicked");
  };

  return (
    <main>
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        buttonLabel="NA"
        videoUrl="/videos/bg-video.mp4"
        onButtonClick={handleHeroButtonClick}
      />
      <Paragraph />
      <CredibilitySection />
      <TravelHospitalityCarousel />
      <ClientSection />
      
    </main>
  );
}
