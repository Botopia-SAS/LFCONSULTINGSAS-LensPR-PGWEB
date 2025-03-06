"use client";

import React from "react";
import { useTranslations } from "next-intl";
// Importamos algunos íconos de lucide-react
import { MapPin, PhoneCall, Mail } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-white dark:bg-zinc-900 text-black dark:text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado centrado */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Contenedor de columnas */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Columna 1: Formulario en una "tarjeta" */}
          <div className="md:w-1/2 bg-gray-50 dark:bg-zinc-800 py-4 px-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {t("formTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("formDescription")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block mb-1 font-medium ">
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 dark:border-zinc-700 rounded py-2 px-4 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t("namePlaceholder")}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 px-4 border border-gray-300 dark:border-zinc-700 rounded py-2 px-3 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t("emailPlaceholder")}
                  required
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border py-2 px-4 border-gray-300 dark:border-zinc-700 rounded py-2 px-3 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder={t("messagePlaceholder")}
                  required
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                className="bg-black dark:bg-white dark:text-black text-white font-semibold py-2 px-6 rounded hover:bg-orange-400 hover:text-black transition-colors"
              >
                {t("sendButton")}
              </button>
            </form>
          </div>

          {/* Columna 2: Info de contacto y mapa en otra tarjeta */}
          <div className="md:w-1/2 bg-gray-50 dark:bg-zinc-800 px-4 py-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              {t("contactInfoTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("contactInfoSubtitle")}
            </p>

            {/* Información de contacto con íconos */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-400" />
                <p>
                  <strong>{t("addressLabel")}:</strong> {t("addressValue")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-6 h-6 text-orange-400" />
                <p>
                  <strong>{t("phoneLabel")}:</strong> {t("phoneValue")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-orange-400" />
                <p>
                  <strong>{t("emailLabel")}:</strong> {t("emailValue")}
                </p>
              </div>
            </div>

            {/* Mapa opcional */}
            <div className="aspect-video bg-gray-300 dark:bg-zinc-700 rounded overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?..."
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
