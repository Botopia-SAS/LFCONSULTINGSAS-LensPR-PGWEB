"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Paragraph() {
  const t = useTranslations("paragraph");

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-12 sm:py-16 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-3xl">
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          {t("text")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-2 px-4 sm:px-6 rounded hover:bg-orange-400 hover:text-white transition-colors">
            {t("letsConnect")}
          </button>
          <button className="border border-zinc-900 dark:border-white py-2 px-4 sm:px-6 rounded hover:bg-orange-400 hover:text-zinc-900 transition-colors">
            {t("moreAboutUs")}
          </button>
        </div>
      </div>
    </section>
  );
}
