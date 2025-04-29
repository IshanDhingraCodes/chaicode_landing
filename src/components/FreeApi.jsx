import React, { useState } from "react";
import { motion } from "motion/react";
import { ThemeConsumer } from "./ui/ThemeContext";

const FreeApi = () => {
  const { theme } = ThemeConsumer();
  const [showVideo, setShowVideo] = useState(false);

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
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
    <section className="my-40">
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-4xl lg:text-5xl font-extrabold tracking-wider"
          aria-label="FreeAPI is open source and available to the community"
        >
          <span className="text-gradient">FreeAPI</span> - Open Source
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col p-4 md:p-10 mt-10 gap-10 justify-center items-center">
        {/* Video Section */}
        <motion.div
          className={`p-2 h-full w-full max-w-[550px] lg:w-[50%] rounded-3xl ${
            theme === "light-theme"
              ? "bg-[#f0f0f0] shadow-xl border border-slate-200"
              : " bg-black-gradient-2"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromLeft}
        >
          <div className="flex-1 aspect-video w-full rounded-xl overflow-hidden">
            {!showVideo ? (
              <button
                className="w-full h-full relative group"
                onClick={() => setShowVideo(true)}
                aria-label="Play YouTube video about FreeAPI"
              >
                <img
                  src="https://img.youtube.com/vi/DxedlhTyR7Q/hqdefault.jpg"
                  alt="YouTube Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 flex items-center justify-center transition">
                  <svg
                    className="w-14 h-14 sm:w-16 sm:h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                    aria-hidden="true"
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
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/DxedlhTyR7Q?autoplay=1"
                title="FreeAPI introduction video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 flex flex-col h-full gap-5 lg:gap-10 items-center lg:items-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-2xl md:text-3xl md:leading-15 lg:leading-[40px] font-semibold text-center lg:text-start"
            aria-label="Unlock your potential with our API hub"
          >
            Unlock Your Potential With Our API Hub
          </h2>
          <p className="text-light text-justify">
            Our API hub is designed to streamline your learning experience in
            API handling across various programming languages. With this
            resource, you can effortlessly build and showcase your front-end
            portfolio in both web and mobile applications. Join us to enhance
            your skills and take your coding projects to the next level!
          </p>
        </motion.div>
      </div>

      <div className="flex items-center justify-center">
        <a
          href="https://freeapi.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center px-6 py-3 rounded-3xl bg-orange-gradient font-bold tracking-wide transition-transform hover:scale-105 text-white"
          aria-label="Visit FreeAPI documentation site"
        >
          Check FreeAPI Docs
        </a>
      </div>
    </section>
  );
};

export default FreeApi;
