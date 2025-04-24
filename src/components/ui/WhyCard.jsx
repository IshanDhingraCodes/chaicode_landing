import React from "react";
import { motion } from "motion/react";
import { ThemeConsumer } from "./ThemeContext";

// eslint-disable-next-line no-unused-vars
const WhyCard = ({ icon: Icon, title, description }) => {
  const { theme } = ThemeConsumer();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`col-span-1 sm:col-span-1 lg:col-span-2 min-h-[200px] sm:min-h-[280px] rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7 transform hover:scale-102 transition-transform duration-300 ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200" : "bg-black-gradient "}`}
    >
      <div className="text-light">
        <Icon size={48} />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
        {title}
      </h1>
      <p className="text-light text-xs sm:text-sm md:text-base text-justify">
        {description}
      </p>
    </motion.div>
  );
};

export default WhyCard;
