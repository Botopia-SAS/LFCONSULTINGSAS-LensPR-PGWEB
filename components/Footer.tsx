"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-black dark:text-gray-300 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
          <p className="text-lg mb-6">{t("ctaSubtitle")}</p>
          <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-400 transition-colors">
            {t("ctaButton")}
          </button>
        </div>

        {/* Links y Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Columna 1: Información de la Marca */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("brand")}</h3>
            <p className="text-sm">
              {t("brandDescription")}
            </p>
          </div>
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-orange-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-orange-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-orange-400 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-orange-400 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Línea Divisoria Inferior */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {t("brand")}. {t("bottom")}
        </div>
      </div>
    </footer>
  );
}
