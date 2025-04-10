import React from "react";
import CTA from "./CTA";
import { ThemeConsumer } from "./ThemeContext";
import { chaigray, chaiwhite } from "../assets";
import { motion } from "motion/react";

const Hero = () => {
  const { theme } = ThemeConsumer();
  return (
    <section className="relative min-h-[calc(100vh-5rem)] px-4 py-20 overflow-hidden">
      <div
        className={`absolute inset-0   pointer-events-none ${theme === "light-theme" ? "bg-grid-pattern opacity-100" : "darkbg-grid-pattern opacity-80"}`}
      />

      <img
        src={theme === "light-theme" ? chaigray : chaiwhite}
        alt="Hero background"
        className={` absolute inset-0 w-full md:h-full h-screen  object-cover  z-0 pointer-events-none ${theme === "light-theme" ? "opacity-20" : "opacity-10"}`}
      />
      <main className="py-24 relative flex flex-col justify-center items-center">
        <motion.p
          className="inline-flex py-2 px-4 bg-radial from-orange-400 from-40% to-orange-700 rounded-full tracking-wider font-semibold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          &#123; Trusted By 1.5M Code Learners &#125;
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl  text-center font-medium mt-14 tracking-wide max-w-screen-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gradient">Consistency</span> And{" "}
          <span className="text-gradient">Community</span> Learning For Coding
          Courses
        </motion.h1>
        <motion.p
          className=" md:text-xl light-text  mt-10 max-w-screen-lg sm:text-center text-justify mx-4 "
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, peer learning peer code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </motion.p>
        <CTA text="Check All Live Cohorts" className="mt-10" />

        {/* ----------------video ----------------------*/}
        <motion.div
          className="mt-16 w-full max-w-3xl aspect-video border-4  border-amber-600 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/yG8JMlldoCE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
