"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Ejemplo de array de logos (puedes sustituirlos con tus propios paths)
const logos = [
  { src: "/images/client1.png", alt: "client 1" },
  { src: "/images/client2.png", alt: "client 2" },
  { src: "/images/client3.png", alt: "client 3" },
  { src: "/images/client4.png", alt: "client 4" },
  { src: "/images/client5.png", alt: "client 5" },
  { src: "/images/client6.png", alt: "client 6" },
  { src: "/images/client7.png", alt: "client 7" },
  { src: "/images/client8.png", alt: "client 8" },
  { src: "/images/client9.png", alt: "client 9" },
  { src: "/images/client10.png", alt: "client 10" },
  { src: "/images/client11.png", alt: "client 11" },
  { src: "/images/client12.png", alt: "client 12" },
];

export default function Carousel() {
  // Duplicamos el array para simular el loop infinito
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10  bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold uppercase">They trusted on us</h2>
        {/* Contenedor del carrusel */}
        <div className="relative overflow-hidden mt-8 mask-radial-circle">
          <motion.div
            className="flex space-x-8"
            initial={{ translateX: 0 }}
            animate={{ translateX: "-900%" }}
            transition={{
              repeat: Infinity,
              duration: 120,
              ease: "linear",
            }}
          >
            {infiniteLogos.map((logo, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-16"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
