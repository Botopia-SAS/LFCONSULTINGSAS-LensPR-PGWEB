"use client";

import { Calendar } from "lucide-react";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Paragraph() {
  const t = useTranslations("paragraph");

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-8 md:py-16 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-full">
        <p className="text-lg md:text-2xl md:py-8 md:tracking-wider font-thin text-justify text-black">
          {t("text")}
        </p>


        <div className="flex pt-8 flex-col sm:flex-row md:justify-center justify-start items-center sm:space-y-0 sm:space-x-4 w-full">
          <Link
            href="https://calendly.com/lauraforerolenspr"
            target="_blank"
            className="bg-orange-300 dark:bg-orange-400 text-zinc-900 shadow-lg dark:text-zinc-900 text-lg py-4 px-8 rounded-full hover:bg-zinc-900 hover:text-white transition-colors flex items-center space-x-2 mx-auto"
          >
            <Calendar className="w-6 h-6" />
            <span>{t("letsConnect")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
