"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Counter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""));
    if (isNaN(end)) return;

    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{value.includes("+") ? "+" : ""}</span>;
};

const CredibilityStats = () => {
  const t = useTranslations("credibilityStats");
  
  const stats = [
    { number: "50+", label: t("brands"), description: t("brandsDescription") },
    { number: "12", label: t("countries"), description: t("countriesDescription") },
    { number: "400", label: t("events"), description: t("eventsDescription") },
    { number: "700", label: t("publications"), description: t("publicationsDescription") },
  ];

  return (
    <section className="py-12 bg-white text-black text-center px-4 md:px-6">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col dark:bg-zinc-900 text-left py-4">
                <span className="text-7xl font-semibold"><Counter value={stat.number} /></span>
                <hr className="bg-gray-500 w-full" />
                <h3 className="text-xl font-semibold mt-4">{stat.label}</h3>
                <p className="text-gray-500 text-sm mr-6">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStats;
