import React from "react";
import { topics } from "../constants";
import { motion } from "motion/react";
import { ThemeConsumer } from "./ui/ThemeContext";

const TopicCloud = () => {
  const { theme } = ThemeConsumer();

  const pillVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.1 },
    transition: { duration: 0.2 },
  };

  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider">
          <span className="text-gradient">Topics Cloud</span>
        </h1>
        <p className="md:text-lg text-light mx-4 mt-5">
          You can find videos and courses on topic and much more
        </p>
      </div>

      <div className="overflow-hidden w-[95%] xs:w-[80%] mx-auto py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* 1st row */}
        <div className="flex min-w-max animate-marquee-infinite my-5">
          {[...topics, ...topics].map((topic, i) => (
            <div key={i}>
              <motion.a
                href={topic.videoUrl}
                target="_blank"
                aria-label={`Watch video on ${topic.name}`}
                className={`relative inline-flex items-center mr-10 rounded-full font-semibold px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300 ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200" : "bg-black-gradient "}`}
                variants={pillVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                transition="transition"
                rel="noopener noreferrer"
              >
                <img
                  src={topic.logo}
                  alt={`${topic.name} Logo`}
                  width={24}
                  height={24}
                  className="mr-2 rounded-full"
                />
                {topic.name}
              </motion.a>
            </div>
          ))}
        </div>

        {/* 2nd row */}
        <div className="flex min-w-max animate-marquee-reverse-infinite">
          {[...topics, ...topics].map((topic, i) => (
            <div key={i}>
              <motion.a
                href={topic.videoUrl}
                target="_blank"
                aria-label={`Watch video on ${topic.name}`}
                className={`relative inline-flex items-center mr-10 rounded-full font-semibold px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300 ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200" : "bg-black-gradient "}`}
                variants={pillVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                transition="transition"
                rel="noopener noreferrer"
              >
                <img
                  src={topic.logo}
                  alt={`${topic.name} Logo`}
                  width={24}
                  height={24}
                  className="mr-2 rounded-full"
                />
                {topic.name}
              </motion.a>
            </div>
          ))}
        </div>

        {/* 3rd row */}
        <div className="flex min-w-max animate-marquee-infinite my-5">
          {[...topics.reverse(), ...topics].map((topic, i) => (
            <div key={i}>
              <motion.a
                href={topic.videoUrl}
                target="_blank"
                aria-label={`Watch video on ${topic.name}`}
                className={`relative inline-flex items-center mr-10 rounded-full font-semibold px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300 ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200" : "bg-black-gradient "}`}
                variants={pillVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                transition="transition"
                rel="noopener noreferrer"
              >
                <img
                  src={topic.logo}
                  alt={`${topic.name} Logo`}
                  width={24}
                  height={24}
                  className="mr-2 rounded-full"
                />
                {topic.name}
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicCloud;
