"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientSection() {
    const t = useTranslations("clientSection");

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-white dark:bg-black">

            {/* Grid Lines */}
            <div className="absolute mx-2 inset-0 grid grid-cols-1 md:grid-cols-3 grid-rows-2 mt-12">
                {/* Sección negra con imágenes en grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 p-4 justify-items-center items-center"
                >
                    {[...Array(12)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={`/images/clientes/secundarios_d/clientedark${index + 1}.png`}
                                alt={`Client ${index + 1}`}
                                width={59}
                                height={59}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección negra con imágenes en grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-black shadow-md shadow-black grid grid-cols-3 grid-rows-3 gap-4 p-4 justify-items-center items-center"
                >
                    {[...Array(9)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={`/images/clientes/principales/clientelight${index + 1}.png`}
                                alt={`Client ${index + 1}`}
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección negra con imágenes en grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=" grid grid-cols-3 grid-rows-3 gap-4 p-4 justify-items-center items-center"
                >
                    {[...Array(12)].map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={`/images/clientes/secundarios_i/clientedark${index + 1}.png`}
                                alt={`Client ${index + 1}`}
                                width={59}
                                height={59}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="hidden md:flex border border-gray-300 dark:border-gray-700"></div>
                <div className="hidden md:flex md:flex-col items-center border align-middle justify-center border-gray-300 dark:border-gray-700">
                    {/* Título con animación de fade-in */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white py-8"
                    >
                        {t("title")}
                    </motion.h2>

                    {/* Botón con animación de escala al hacer hover */}
                    <Link href="#contact" passHref>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hidden md:flex px-6 py-4 bg-orange-300 text-black text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all"
                        >
                            {t("contactButton")}
                        </motion.button>
                    </Link>
                </div>
                <div className="hidden md:flex border border-gray-300 dark:border-gray-700"></div>

            </div>
        </section>
    );
}
