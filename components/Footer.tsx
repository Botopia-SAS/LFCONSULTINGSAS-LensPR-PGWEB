"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-black dark:text-gray-300 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} {t("brand")}. {t("bottom")}
        </div>
      </div>
    </footer>
  );
}
