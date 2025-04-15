import React, { useState } from "react";
import { motion } from "motion/react";
import { cohorts } from "../constants";
import { CalendarDays, Clock } from "lucide-react";
import Blinker from "./Blinker";
import { ThemeConsumer } from "./ThemeContext";

const Cohorts = () => {
  const { theme } = ThemeConsumer();

  const [showVideo, setShowVideo] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = cohorts.length;

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
    );
    setShowVideo(false);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1,
    );
    setShowVideo(false);
  };

  const getVariant = (index) => {
    const offset = index - activeIndex;
    const normalizedOffset =
      offset < -totalItems / 2
        ? offset + totalItems
        : offset > totalItems / 2
          ? offset - totalItems
          : offset;

    if (normalizedOffset === 0) return "center";
    if (normalizedOffset === 1) return "right";
    if (normalizedOffset === -1) return "left";
    return normalizedOffset > 1 ? "farRight" : "farLeft";
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 3,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    left: {
      x: "-70%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: 2,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    right: {
      x: "70%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: 2,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    farLeft: {
      x: "-140%",
      scale: 0.5,
      opacity: 0,
      zIndex: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    farRight: {
      x: "140%",
      scale: 0.5,
      opacity: 0,
      zIndex: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold mt-5 tracking-wider text-gradient">
            Cohorts
          </h1>
          <p className="md:text-lg light-text mx-4 mt-5 ">
            Live training classes
          </p>
        </div>
        {/* Carousel Container*/}
        <div className="flex justify-center items-center relative w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto my-6 sm:my-10 h-[520px] sm:h-[570px] md:h-[620px] lg:h-[720px] overflow-hidden py-3 sm:py-5 box-border">
          {/* Perspective Wrapper*/}
          <div className="relative w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-3/5 h-full pointer-events-none perspective-1000">
            {cohorts.map((cohort, index) => (
              <motion.div
                key={index}
                className={`absolute w-full h-full top-0 left-0 shadow-lg cursor-pointer select-none pointer-events-auto box-border origin-center overflow-hidden rounded-lg  ${theme === "light-theme" ? "bg-[#FFFAF0] shadow-lg border border-slate-200" : " bg-[#3D2B1F]"}`}
                variants={variants}
                initial={false}
                animate={getVariant(index)}
              >
                <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg h-full overflow-y-auto">
                  <div className="w-full aspect-video rounded-lg overflow-hidden flex-shrink-0 ">
                    {!(showVideo && index === activeIndex) ? (
                      <button
                        className="w-full h-full relative group z-[20] pointer-events-auto"
                        onClick={() => {
                          if (index === activeIndex) {
                            setShowVideo(true);
                          }
                        }}
                      >
                        <img
                          src={cohort.thumbnail}
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
                        src={cohort.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    )}
                  </div>

                  {/* Text Section */}
                  <div className="w-full flex flex-col justify-between  py-2 flex-grow">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold flex justify-between items-center">
                        <div
                          className={`truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[calc(100%-120px)]  ${theme === "light-theme" ? "text-[#3D2B1F]" : " text-[#FFDAB9]"}`}
                        >
                          {cohort.heading}
                        </div>
                        <div
                          className={`px-1 py-1 md:px-2 sm:py-2  flex justify-center items-center text-sm gap-2 rounded-xl whitespace-nowrap ${theme === "light-theme" ? "bg-orange-950 text-white" : "bg-black/70"}`}
                        >
                          Live <Blinker />
                        </div>
                      </h3>
                      <p
                        className={`text-xs sm:text-sm  font-semibold mt-1 ${theme === "light-theme" ? "text-slate-600" : " text-[#FFFAF0]"}`}
                      >
                        {cohort.subHeading}
                      </p>
                      <div className="mt-3 sm:mt-4">
                        <p
                          className={`text-sm font-bold flex  items-center gap-2  ${theme === "light-theme" ? "text-[#3D2B1F]" : " text-[#FFDAB9]"}`}
                        >
                          <CalendarDays className="w-4 h-4" />
                          {cohort.starts}
                        </p>
                        <p
                          className={`text-sm ${theme === "light-theme" ? "text-slate-600" : " text-[#FFFAF0]"} font-bold mt-2 flex items-center gap-2`}
                        >
                          <Clock className="w-4 h-4" />
                          {cohort.tenure}
                        </p>
                      </div>
                    </div>

                    {/* Bottom part: Pricing */}
                    <div className="mt-3 sm:mt-4">
                      <div className="flex items-baseline gap-2 sm:gap-3">
                        <p
                          className={`text-base sm:text-lg font-bold ${theme === "light-theme" ? "text-[#3D2B1F]" : " text-[#FFDAB9]"}`}
                        >
                          {cohort.discountedPrize}
                        </p>
                        <p
                          className={`line-through text-xs sm:text-sm ${theme === "light-theme" ? "text-slate-600" : " text-[#FFFAF0]"} font-semibold`}
                        >
                          {cohort.realPrize}
                        </p>
                      </div>
                      <p
                        className={`text-xs sm:text-sm ${theme === "light-theme" ? "text-slate-600" : " text-[#FFFAF0]"} font-bold mb-2`}
                      >
                        Save {cohort.discounte}
                      </p>
                      <a
                        href={cohort.link}
                        className={
                          "flex items-center text-white justify-center px-4 py-2 radial-bg rounded-md font-bold tracking-wide hover:scale-102 transition duration-200 ease-in-out transform filter"
                        }
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-1.5 sm:left-3 md:left-5 z-20 bg-black/50 hover:bg-black/80 text-white border-none p-0 text-lg sm:text-2xl cursor-pointer rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center transition-colors duration-300 ease-linear"
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-1.5 sm:right-3 md:right-5 z-20 bg-black/50 hover:bg-black/80 text-white border-none p-0 text-lg sm:text-2xl cursor-pointer rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center transition-colors duration-300 ease-linear"
            onClick={goToNext}
            aria-label="Next slide"
          >
            &#10095;
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-10 ">
            {cohorts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ease-linear border ${index === activeIndex ? "bg-amber-500 border-amber-700 scale-110" : "bg-black/40 border-transparent hover:bg-black/60"}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cohorts;
