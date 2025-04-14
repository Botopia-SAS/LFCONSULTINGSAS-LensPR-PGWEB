"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
// Opcional: si quieres un ícono de hamburguesa y cierre:
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();

  // Estado para el idioma actual
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const [isAgencyOpen, setIsAgencyOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Nuevo estado para el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const locale = pathname?.split("/")[1] || "es";
    setCurrentLanguage(locale);
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    if (lang !== currentLanguage && pathname) {
      const newPathname = `/${lang}${pathname.replace(/^\/[a-z]{2}/, "")}`;
      router.push(newPathname);
    }
  };

  return (
    <nav className="flex items-center justify-around py-6 md:py-8 bg-white dark:bg-zinc-900 text-lg relative z-50 dark:text-white">

      <Link href={`/${currentLanguage}`}>
        <img
          src="/logo-black.png"
          alt="logo"
          className="w-auto h-16 dark:hidden" // Modo claro: Logo normal
        />
      </Link>
      <Link href={`/${currentLanguage}`}>
        <img
          src="/logo-white.svg"
          alt="logo"
          className="w-auto h-16 hidden dark:block" // Modo oscuro: Logo blanco
        />
      </Link>

      {/* Menú principal (desktop) */}
      <ul className="hidden md:flex space-x-14 text-2xl">

        {/* CLIENTS (sin dropdown) */}
        <li>
          <a
            href={`/${currentLanguage}/sections/clients`}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {t("clients")}
          </a>
        </li>

        {/* CLIENTS (sin dropdown) */}
        <li>
          <a
            href={`/${currentLanguage}/sections/events`}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {t("events")}
          </a>
        </li>

        {/* CLIENTS (sin dropdown) */}
        <li>
          <a
            href={`/${currentLanguage}/sections/press`}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {t("press")}
          </a>
        </li>
        <li>
          <a
            href={`/${currentLanguage}/sections/aboutus`}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {t("aboutUs")}
          </a>
        </li>

        <li>

        </li>
      </ul>

      {/* Botones de Language y Contact (desktop) */}
      <div className="hidden md:flex items-center space-x-16">
        <div
          className="relative"
          onMouseEnter={() => setIsLanguageOpen(true)}
          onMouseLeave={() => setIsLanguageOpen(false)}
        >
          <button className="text-gray-700 text-base dark:text-white hover:text-gray-900 dark:hover:text-gray-300 shadow-lg shadow-gray-300 dark:border-gray-700 py-2 px-4 rounded-lg flex">
            {t("language")}
            <svg
              className="ml-2 w-3 h-5 fill-current"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h10L5 6z" />
            </svg>
          </button>
          {isLanguageOpen && (
            <ul className="absolute cursor-pointer -top-1 text-base right-0 bg-white dark:bg-gray-900  shadow-md min-w-[100px] rounded-lg">
              <li className="flex px-4 py-4">
                {t("language")}
                <svg
                  className="ml-2 w-3 h-auto fill-current"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6h10L5 0z" />
                </svg>
              </li>
              <li
                className={`rounded-lg mx-2 ${currentLanguage === "es"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  } px-4 py-2`}
                onClick={() => changeLanguage("es")}
              >
                {t("spanish")}
              </li>
              <li
                className={`rounded-lg mx-2 ${currentLanguage === "en"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  } px-4 py-2`}
                onClick={() => changeLanguage("en")}
              >
                {t("english")}
              </li>
              <li
                className={`rounded-lg mx-2 mb-2 ${currentLanguage === "pt"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  } px-4 py-2`}
                onClick={() => changeLanguage("pt")}
              >
                {t("portuguese")}
              </li>
            </ul>
          )}
        </div>

        <button
          onClick={() => router.push(`/${currentLanguage}/sections/contact`)}
          className="text-white text-md shadow-lg  bg-black dark:bg-orange-300 dark:text-gray-700 hover:bg-black hover:text-white px-8 py-4 rounded-full transition hover:scale-110 hover:-translate-y-1"
        >
          {t("contact")}
        </button>
      </div>

      {/* Ícono Hamburguesa (Mobile only) */}
      <button
        className="md:hidden text-gray-700 dark:text-white mx-4"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>


      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute text-3xl top-20 left-0 w-full bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-12">
          <ul className="flex flex-col space-y-4">
            {/* Home */}
            <li>
              <a
                href={`/${currentLanguage}`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </a>
            </li>

            {/* Services */}
            <li>
              <a
                href={`/${currentLanguage}/sections/services`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("services")}
              </a>
            </li>

            {/* Clients */}
            <li>
              <a
                href={`/${currentLanguage}/sections/clients`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("clients")}
              </a>
            </li>

            {/* Events */}
            <li>
              <a
                href={`/${currentLanguage}/sections/events`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("events")}
              </a>
            </li>

            {/* Press */}
            <li>
              <a
                href={`/${currentLanguage}/sections/press`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("press")}
              </a>
            </li>

            {/* Agency */}
            <li>
              <a
                href={`/${currentLanguage}/sections/aboutus`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("aboutUs")}
              </a>
            </li>

            {/* Language */}
            <li className="pt-2 border-t border-gray-200 dark:border-zinc-700">
              <p className="text-gray-700 dark:text-white font-semibold mb-2">
                {t("language")}
              </p>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 rounded ${currentLanguage === "es"
                    ? "bg-black text-white"
                    : "bg-gray-100 dark:bg-zinc-800"
                    }`}
                  onClick={() => {
                    changeLanguage("es");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("spanish")}
                </button>
                <button
                  className={`px-3 py-1 rounded ${currentLanguage === "en"
                    ? "bg-black text-white"
                    : "bg-gray-100 dark:bg-zinc-800"
                    }`}
                  onClick={() => {
                    changeLanguage("en");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("english")}
                </button>
                <button
                  className={`px-3 py-1 rounded ${currentLanguage === "pt"
                    ? "bg-black text-white"
                    : "bg-gray-100 dark:bg-zinc-800"
                    }`}
                  onClick={() => {
                    changeLanguage("pt");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("portuguese")}
                </button>
              </div>
            </li>

            {/* Contact */}
            <li className="pt-4">
              <button
                onClick={() => {
                  router.push(`/${currentLanguage}/sections/contact`);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-white bg-black dark:bg-white dark:text-black hover:bg-orange-400 px-4 py-2 rounded transition hover:scale-105 hover:-translate-y-1"
              >
                {t("contact")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
