"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const images = [...Array(14)].map((_, i) => `/images/eventos/evento${i + 1}.png`);

function Capsule({ label }: { label: string }) {
    return (
        <div className="px-4 py-2 bg-orange-50 text-orange-800 border border-orange-800 text-sm rounded-full shadow-sm hover:bg-orange-200 transition">
            {label}
        </div>
    );
}

export default function ClientSection() {
    const t = useTranslations("clientSection");
    const router = useRouter();

    // Aquí suponemos que el idioma actual está almacenado en el contexto de traducción
    const [currentLanguage, setCurrentLanguage] = useState("es");

    return (
        <section className=" w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white py-8"
            >
                {t("title")}
            </motion.h2>
            {/* Grid Lines */}
            <div className="inset-0 grid grid-cols-1 md:grid-cols-3 grid-rows-1 mt-1 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:grid grid-cols-5 grid-rows-4 gap-4 justify-items-center items-center"
                >
                    {[...Array(20)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                                <Image
                                    src={`/images/clientes/secundarios_d/clientedark${index + 1}.png`}
                                    alt={`Client ${index + 1}`}
                                    width={59}
                                    height={59}
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección negra con imágenes en grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-black mx-6 shadow-md shadow-black grid grid-cols-4 grid-rows-4 gap-4 justify-items-center items-center"
                >
                    {[...Array(16)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                                <Image
                                    src={`/images/clientes/principales/clientelight${index + 1}.png`}
                                    alt={`Client ${index + 1}`}
                                    width={70}
                                    height={70}
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=" grid mx-6 grid-cols-5 grid-rows-4 gap-4 justify-items-center items-center"
                >
                    {[...Array(20)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                                <Image
                                    src={`/images/clientes/secundarios_i/clientedark${index + 1}.png`}
                                    alt={`Client ${index + 1}`}
                                    width={59}
                                    height={59}
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:hidden mx-4 grid grid-cols-4 grid-rows-4 gap-4 justify-items-center items-center"
                >
                    {[...Array(16)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                                <Image
                                    src={`/images/clientes/secundarios_d/clientedark${index + 1}.png`}
                                    alt={`Client ${index + 1}`}
                                    width={59}
                                    height={59}
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <div className="hidden md:flex flex-col py-4 mt-10">
                <div className="hidden md:flex w-full flex-wrap justify-between md:justify-center md:gap-32 lg:gap-40">
                    {["Fintech", "Salud", "Legaltech", "Logística", "Proptech", "Insurtech"].map((category, index) => (
                        <Capsule key={index} label={category} />
                    ))}
                </div>
            </div>

            <div className="flex md:hidden flex-col py-4">
                <div className="flex md:hidden w-full flex-wrap justify-between md:justify-center gap-4">
                    {["Fintech", "Proptech", "Insurtech", "Salud"].map((category, index) => (
                        <Capsule key={index} label={category} />
                    ))}
                </div>
            </div>

            <motion.div
                className="relative w-full overflow-hidden py-4"
            >
                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {[...images, ...images].map((src, index) => {
                        const isCenter = index % images.length === Math.floor(images.length / 2); // Imagen del medio

                        return (
                            <motion.div
                                key={index}
                                className={`flex-shrink-0 ${isCenter ? "scale-125" : "scale-100"
                                    } transition-transform duration-900`}
                            >
                                <div className="w-36 h-20 lg:w-72 lg:h-48 flex items-center justify-center py-12">
                                    <Image
                                        src={src}
                                        alt={`Client ${index}`}
                                        width={190}
                                        height={190}
                                        className="object-fill rounded-lg"
                                    />
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

        </section>
    );
}
