"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Paragraph() {
  const t = useTranslations("paragraph");

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-12 sm:py-16 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-3xl">
        <p
          style={{ textAlign: "justify" }}
          className="text-base sm:text-lg mb-6 leading-relaxed"
        >
          {t("text")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 ">
          <Link
            href="https://calendly.com/lauraforerolenspr"
            target="_blank"
            className="bg-orange-400 dark:bg-orange-400 text-zinc-900 border border-zinc-900 dark:text-zinc-900 py-2 px-4 sm:px-6 rounded hover:bg-zinc-900 hover:text-white transition-colors"
          >
            {t("letsConnect")}
          </Link>
        </div>
      </div>
    </section>
  );
}
