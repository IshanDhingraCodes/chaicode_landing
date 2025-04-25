import React from "react";
import { ThemeConsumer } from "./ui/ThemeContext";
import { discord } from "../assets";
import { motion } from "motion/react";

const Discord = () => {
  const { theme } = ThemeConsumer();

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="flex lg:flex-row flex-col px-4 sm:px-6 md:px-10 my-20 gap-10">
      <motion.div
        className="flex-1 flex justify-center items-center lg:items-start flex-col gap-8  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <p
          className={`inline-flex py-2 px-4 rounded-full tracking-wider font-semibold ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200 text-gray-700" : "bg-black-gradient"}`}
        >
          &#123; Community &#125;
        </p>

        <h2 className="text-4xl lg:text-5xl md:leading-15  lg:leading-[55px] font-semibold text-center lg:text-start">
          Join our <span className="text-gradient">community</span> where{" "}
          <span className="text-gradient">creativity thrives</span>
        </h2>
        <a
          href="https://discord.gg/A4pmRHVe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Discord with 80,000 active coders"
          className={`mt-4 inline-block text-center py-3 px-6 rounded-3xl bg-orange-gradient font-bold tracking-wide transition-transform hover:scale-105 text-white`}
        >
          80,000 Active Coders In Discord
        </a>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-4 relative "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInFromRight}
      >
        <div
          className={`p-2 ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200 text-gray-700" : "bg-black-gradient"}`}
        >
          <img
            src={discord}
            alt="discord"
            loading="lazy"
            className="w-full max-w-[550px] lg:max-w-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Discord;
