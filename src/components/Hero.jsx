import React, { useState } from "react";
import CTA from "./CTA";
import { ThemeConsumer } from "./ThemeContext";
import { chaigray, chaiwhite } from "../assets";
import { motion } from "motion/react";
import { Users, Code, Home, HelpCircle, Gift } from "lucide-react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const { theme } = ThemeConsumer();
  return (
    <section className="relative min-h-[calc(100vh-5rem)] px-4 md:pt-20 overflow-hidden">
      <div
        className={`absolute inset-0 pointer-events-none ${theme === "light-theme" ? "bg-grid-pattern opacity-100" : "darkbg-grid-pattern opacity-80"}`}
      />

      <div className="absolute inset-0 z-5  hidden md:block light-text">
        <motion.div
          className={` top-[5%] left-[25%] interactiveElement ${
            theme === "light-theme" ? "bg-white/90 " : "bg-gray-900/40 "
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Users className="text-orange-500" />
          <span className="font-semibold text-sm">Peer Learning</span>
        </motion.div>

        <motion.div
          className={`top-[15%] left-[10%] interactiveElement ${
            theme === "light-theme" ? "bg-white/90" : "bg-gray-900/40"
          }`}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Code className="text-green-500" />
          <span className="font-semibold text-sm">Code Reviews</span>
        </motion.div>

        <motion.div
          className={`top-[16%] -right-[3%] interactiveElement ${
            theme === "light-theme" ? "bg-white/90" : "bg-gray-900/40"
          }`}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <Home className="text-blue-500" />
          <span className="font-semibold text-sm">Virtual Hostel</span>
        </motion.div>

        <motion.div
          className={`top-[4%] right-[4%] interactiveElement ${
            theme === "light-theme" ? "bg-white/90" : "bg-gray-900/40"
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <HelpCircle className="text-purple-500" />
          <span className="font-semibold text-sm">Doubt Sessions</span>
        </motion.div>

        <motion.div
          className={`top-[45%] right-[8%] interactiveElement ${
            theme === "light-theme" ? "bg-white/90" : "bg-gray-900/40"
          }`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <Gift className="text-pink-500" />
          <span className="font-semibold text-sm">Bounties</span>
        </motion.div>
      </div>

      <img
        src={theme === "light-theme" ? chaigray : chaiwhite}
        alt="Hero background"
        className={` absolute inset-0 w-full md:h-full h-screen  object-cover  z-0 pointer-events-none ${theme === "light-theme" ? "opacity-20" : "opacity-10"}`}
      />
      <main className="py-24 relative flex flex-col justify-center items-center">
        <motion.p
          className="inline-flex py-2 px-4 radial-bg rounded-full tracking-wider font-semibold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          &#123; Trusted By 1.5M Code Learners &#125;
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl  text-center font-medium mt-14 tracking-wide max-w-screen-xl z-10"
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
          unmatched. Bounties, Peer learning, Code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </motion.p>
        <CTA text="Check All Live Cohorts" className="mt-10 z-10" />

        {/* ----------------video ----------------------*/}
        <motion.div
          className="mt-16 w-full max-w-3xl aspect-video border-4  border-amber-600 rounded-3xl z-15 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          {!showVideo ? (
            <button
              className="w-full h-full relative group z-[20] pointer-events-auto"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="https://img.youtube.com/vi/yG8JMlldoCE/hqdefault.jpg"
                alt="YouTube Video Thumbnail"
                className="w-full h-full object-cover rounded-2xl "
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 rounded-2xl transition">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle
                    cx="42"
                    cy="42"
                    r="42"
                    fill="black"
                    fillOpacity="0.6"
                  />
                  <polygon points="34,24 62,42 34,60" fill="white" />
                </svg>
              </div>
            </button>
          ) : (
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube-nocookie.com/embed/yG8JMlldoCE?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
