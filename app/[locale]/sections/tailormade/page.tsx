"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

export default function TailorMadePage() {
  const t = useTranslations("header");
  const locale = useLocale();

  // Asegúrate de que el `locale` esté disponible antes de renderizar
  if (!locale) return null;

  return (
    <section key={locale} className="dark:bg-zinc-900 py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t("tailorMade")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Contenido próximamente...
          </p>
        </div>
      </div>
    </section>
  );
}
