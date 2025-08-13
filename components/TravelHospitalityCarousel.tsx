'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function LoudSection() {
  const t = useTranslations("loudSection");

  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-6 py-16 space-y-12 pb-32 md:pb-40 lg:pb-48">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-penting">{t("title")}</h1>
      <p className="text-lg text-gray-600">{t("subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-24 w-full px-4 md:px-8 lg:px-12 xl:px-20">

        <div className="bg-black rounded-xl text-white p-6 md:p-6 lg:p-8 flex flex-col items-start text-left aspect-square max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full">
          <div className="h-full flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
            <div className="pt-4">
              <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight">{t("pressPublications.title")}</h3>
            </div>
            <div className="flex-1 flex items-center pb-6">
              <p className="text-gray-300 text-sm md:text-sm lg:text-base leading-relaxed">
                {t("pressPublications.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-orange-400 rounded-xl flex flex-col items-start text-left relative overflow-hidden aspect-square max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full">
          <div className="relative z-10 p-6 md:p-6 lg:p-8 h-full flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
            <div className="pt-4">
              <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight text-black">{t("corporateEvents.title")}</h3>
            </div>
            <div className="flex-1 flex items-center pb-6">
              <p className="text-gray-800 text-sm md:text-sm lg:text-base leading-relaxed">{t("corporateEvents.description")}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 md:p-6 lg:p-8 flex flex-col items-start text-left aspect-square max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full md:col-span-2 lg:col-span-1">
          <div className="h-full flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
            <div className="pt-4">
              <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight text-gray-900">{t("tailorMadeProjects.title")}</h3>
            </div>
            <div className="flex-1 flex items-center pb-6">
              <p className="text-gray-600 text-sm md:text-sm lg:text-base leading-relaxed">
                {t("tailorMadeProjects.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
