"use client";

import React from "react";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function AboutUsSection() {
  const t = useTranslations("about");
  const locale = useLocale();

  // Asegúrate de que el `locale` esté disponible antes de renderizar
  if (!locale) return null;

  return (
    <section key={locale} className="dark:bg-zinc-900 py-28 text-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Columna Izquierda: Logo + Información de LENS PR */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {t("lensPRInfo.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("lensPRInfo.paragraph1")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("lensPRInfo.paragraph2")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("lensPRInfo.paragraph3")}
            </p>
          </div>

          {/* Columna Derecha: Foto de Laura + Info + Sobre mí */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            {/* Foto de Laura */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/laura.jpeg"
                alt="Laura Forero"
                fill
                className="object-cover"
              />
            </div>

            {/* Datos de contacto */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-black dark:text-white mt-2">
                Laura Forero
              </h3>

              {/* Íconos de contacto */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <a
                  href="mailto:laura@lenspr.com"
                  className="text-black dark:text-white hover:text-orange-400 dark:hover:text-orange-400 transition"
                  aria-label="Enviar email a Laura"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lauramarcelaforero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-orange-400 dark:hover:text-orange-400 transition"
                  aria-label="Visitar perfil de LinkedIn de Laura"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Texto “Sobre mí” */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t("text1")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t("text2")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("text3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
