"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
// Opcional: si quieres un ícono de hamburguesa y cierre:
import { Menu, X } from "lucide-react";

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
    <nav className="flex items-center justify-between w-full px-10 py-6 bg-white dark:bg-zinc-900 text-lg relative z-50 dark:text-white">
      {/* LOGO */}
      <img
        src="/logo-black.svg"
        alt="logo"
        className="w-auto h-16 dark:hidden" // Modo claro: Logo normal
      />
      <img
        src="/logo-white.svg"
        alt="logo"
        className="w-auto h-16 hidden dark:block" // Modo oscuro: Logo blanco
      />

      {/* Menú principal (desktop) */}
      <ul className="hidden md:flex space-x-14 ml-32">
        <li>
          <a
            href="/"
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
          >
            {t("home")}
          </a>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setIsAgencyOpen(true)}
          onMouseLeave={() => setIsAgencyOpen(false)}
        >
          <button className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 px-4 rounded-lg flex">
            {t("agency")}
            <svg
              className="ml-2 w-3 h-7 fill-current"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h10L5 6z" />
            </svg>
          </button>

          {isAgencyOpen && (
            <ul className="absolute -top-4 right-0 bg-white dark:bg-gray-900 border border-zinc-800 shadow-md min-w-[110px] rounded-lg">
              <li className="flex px-4 py-4">
                {t("agency")}
                <svg
                  className="ml-2 w-3 fill-current"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6h10L5 0z" />
                </svg>
              </li>
              <li className="mt-3">
                <a
                  href={`/${currentLanguage}/sections/aboutus`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href={`/${currentLanguage}/sections/services`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {t("services")}
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* CLIENTS (sin dropdown) */}
        <li>
          <a
            href={`/${currentLanguage}/sections/services`}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
          >
            {t("clients")}
          </a>
        </li>

        {/* RESULTS (con dropdown) */}
        <li
          className="relative"
          onMouseEnter={() => setIsResultsOpen(true)}
          onMouseLeave={() => setIsResultsOpen(false)}
        >
          <button className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 px-4 rounded-lg flex">
            {t("results")}
            <svg
              className="ml-2 w-3 h-7 fill-current"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h10L5 6z" />
            </svg>
          </button>

          {isResultsOpen && (
            <ul className="absolute -top-4 right-0 bg-white dark:bg-gray-900 border border-zinc-800 shadow-md min-w-[110px] rounded-lg">
              <li className="flex px-4 py-4">
                {t("results")}
                <svg
                  className="ml-2 w-3 fill-current"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6h10L5 0z" />
                </svg>
              </li>
              <li className="mt-3">
                <a
                  href={`/${currentLanguage}/sections/press`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {t("press")}
                </a>
              </li>
              <li>
                <a
                  href={`/${currentLanguage}/sections/events`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {t("events")}
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Botones de Language y Contact (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <div
          className="relative"
          onMouseEnter={() => setIsLanguageOpen(true)}
          onMouseLeave={() => setIsLanguageOpen(false)}
        >
          <button className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-lg flex">
            {t("language")}
            <svg
              className="ml-2 w-3 h-7 fill-current"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h10L5 6z" />
            </svg>
          </button>
          {isLanguageOpen && (
            <ul className="absolute -top-1 right-0 bg-white dark:bg-gray-900 border border-zinc-800 shadow-md min-w-[100px] rounded-lg">
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
                className={`rounded-lg mx-2 ${
                  currentLanguage === "es"
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                } px-4 py-2`}
                onClick={() => changeLanguage("es")}
              >
                {t("spanish")}
              </li>
              <li
                className={`rounded-lg mx-2 ${
                  currentLanguage === "en"
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                } px-4 py-2`}
                onClick={() => changeLanguage("en")}
              >
                {t("english")}
              </li>
              <li
                className={`rounded-lg mx-2 mb-2 ${
                  currentLanguage === "pt"
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
          className="text-white bg-black dark:bg-white dark:text-black hover:bg-orange-400 px-4 py-2 rounded transition hover:scale-110 hover:-translate-y-1"
        >
          {t("contact")}
        </button>
      </div>

      {/* Ícono Hamburguesa (Mobile only) */}
      <button
        className="md:hidden text-gray-700 dark:text-white ml-4"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-6">
          <ul className="flex flex-col space-y-4">
            {/* Home */}
            <li>
              <a
                href="/"
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </a>
            </li>

            {/* Agency */}
            <li>
              <a
                href={`/${currentLanguage}/sections/aboutus`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("agency")}
              </a>
            </li>

            {/* Clients */}
            <li>
              <a
                href={`/${currentLanguage}/sections/services`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("clients")}
              </a>
            </li>

            {/* Results */}
            <li>
              <a
                href={`/${currentLanguage}/sections/press`}
                className="block text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("results")}
              </a>
            </li>

            {/* Language */}
            <li className="pt-2 border-t border-gray-200 dark:border-zinc-700">
              <p className="text-gray-700 dark:text-white font-semibold mb-2">
                {t("language")}
              </p>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 rounded ${
                    currentLanguage === "es"
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
                  className={`px-3 py-1 rounded ${
                    currentLanguage === "en"
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
                  className={`px-3 py-1 rounded ${
                    currentLanguage === "pt"
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
