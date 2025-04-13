'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function LoudSection() {
  const t = useTranslations("loudSection");

  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-6 py-16 space-y-12">
      <h1 className="text-5xl font-bold leading-tight">{t("title")}</h1>
      <p className="text-lg text-gray-600">{t("subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-full">

        <div className="bg-black rounded-lg text-white p-6 flex flex-col justify-center items-center text-center h-full">

          <h3 className="font-bold text-xl mt-2">{t("pressPublications.title")}</h3>
          <p className="text-gray-400 text-sm mt-2">
            {t("pressPublications.description")}
          </p>
        </div>

        <div className="bg-orange-400 rounded-lg py-8 md:py-0 flex flex-col justify-center items-center text-center relative overflow-hidden">

          {/* Texto centrado verticalmente */}
          <div className="relative z-10 px-4">
            <h3 className="font-bold text-xl">{t("corporateEvents.title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("corporateEvents.description")}</p>
          </div>
        </div>


        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center text-center h-full">
          <h3 className="font-bold text-xl">{t("tailorMadeProjects.title")}</h3>
          <p className="text-gray-700 text-sm mt-2">
            {t("tailorMadeProjects.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
