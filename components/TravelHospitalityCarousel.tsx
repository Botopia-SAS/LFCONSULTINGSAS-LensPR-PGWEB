'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function LoudSection() {
  const t = useTranslations("loudSection");

  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-6 py-16 space-y-12">
      <h1 className="text-5xl font-bold leading-tight">{t("title")}</h1>
      <p className="text-lg text-gray-600">{t("subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-full">

        <div className="bg-yellow-400 py-28 md:py-0 flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src="/hand.png"
            alt="Hands"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
          />

          {/* Texto centrado verticalmente */}
          <div className="relative z-10 px-4">
            <h3 className="font-bold text-xl">{t("corporateEvents.title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("corporateEvents.description")}</p>
          </div>
        </div>


        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center text-center h-full">
          <h3 className="font-bold text-xl">{t("tailorMadeProjects.title")}</h3>
          <p className="text-gray-700 text-sm mt-2">
            {t("tailorMadeProjects.description")}
          </p>
        </div>

        <div className="bg-black text-white p-6 flex flex-col justify-center items-center text-center h-full">
          
          <h3 className="font-bold text-xl mt-2">{t("pressPublications.title")}</h3>
          <p className="text-gray-400 text-sm mt-2">
            {t("pressPublications.description")}
          </p>
        </div>

        <div className="bg-yellow-400 flex flex-col justify-center items-center text-center relative overflow-hidden md:py-28">
          <img
            src="/phone-mockup.png"
            alt="Phone"
            className="hidden md:flex md:absolute inset-0 w-full h-full object-contain md:scale-150"
          />
          <div className="relative z-10 flex flex-col items-center p-8 md:p-0">
            <h3 className="font-bold text-xl">{t("creativeDesign.title")}</h3>
            <p className="bg-white text-black text-sm p-2 rounded mt-2 text-center">
              <strong>{t("creativeDesign.highlight")}</strong><br /> {t("creativeDesign.description")}
            </p>
            <h3 className="font-bold text-2xl mt-2">LensPR®</h3>
          </div>
        </div>


      </div>
    </section>
  );
}
