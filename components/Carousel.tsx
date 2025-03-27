"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Carousel({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) {
  return (
    <div className="relative overflow-hidden my-8 mask-radial-circle">
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
        {logos.map((logo, index) => (
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
  );
}
