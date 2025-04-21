import React, { useState, useRef } from "react";
import { ThemeConsumer } from "./ui/ThemeContext";
import { motion, useScroll, useTransform } from "motion/react";
import CTA from "./ui/CTA";
import { Users, Code, Home, HelpCircle, Gift } from "lucide-react";

const Hero = () => {
  const { theme } = ThemeConsumer();
  const ref = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* background grid */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-95 ${
          theme === "light-theme" ? "bg-grid-pattern" : "darkbg-grid-pattern"
        }`}
      />

      <div className="absolute inset-0 z-5  hidden lg:block light-text">
        <motion.div
          className={` top-[5%] left-[20%] interactiveElement ${
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
          className={`top-[45%] left-[15%] interactiveElement ${
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
          className={`top-[35%] -right-[5%] interactiveElement ${
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

      <main className="relative flex flex-col justify-center items-center mt-20">
        <motion.p
          className={`inline-flex py-2 px-4 rounded-full tracking-wider font-semibold ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200 text-gray-700" : "bg-black-gradient"}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          &#123; Trusted By 1.5M Code Learners &#125;
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[85px] text-center font-medium mt-14 tracking-wide max-w-screen-xl md:max-w-screen-3xl z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gradient">Consistency</span> And{" "}
          <span className="text-gradient">Community</span> Learning For Coding
          Courses
        </motion.h1>

        <motion.p
          className="md:text-xl text-light mt-10 max-w-screen-lg sm:text-center text-justify mx-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, Peer learning, Code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </motion.p>

        <CTA text="Check All Live Cohorts" className="mt-20 mb-10  z-10" />

        {/* Perspective wrapper */}
        <div className=" w-full max-w-3xl lg:max-w-5xl perspective-[1200px] z-10 ">
          <motion.div
            ref={ref}
            className="aspect-video rounded-2xl relative origin-center border-[12px] border-zinc-900 overflow-hidden z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              rotateX,
              scale,
            }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            {!showVideo ? (
              <button
                className="w-full h-full relative group z-20 cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <img
                  src="https://img.youtube.com/vi/yG8JMlldoCE/hqdefault.jpg"
                  alt="YouTube Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition z-20">
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
        </div>
      </main>
    </section>
  );
};

export default Hero;
