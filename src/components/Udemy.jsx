import React, { useState, useRef } from "react";
import { ThemeConsumer } from "./ui/ThemeContext";
import { udemyCourses } from "../constants";

const Udemy = () => {
  const [showVideo, setShowVideo] = useState({});
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleVideoToggle = (index) => {
    setShowVideo((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div
      className="max-w-7xl mx-auto my-20 relative"
      aria-label="Udemy Courses Section"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mt-4">
          Our Courses On <span className="text-gradient">Udemy</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-light">
          Join thousands of students who have transformed their careers with our
          comprehensive courses
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="mt-12 flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 scrollbar-none"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        role="region"
        aria-label="Course carousel"
      >
        {udemyCourses.map((course, i) => (
          <div
            key={i}
            className="flex-none w-full md:w-[90%] lg:w-[80%] snap-center"
            role="group"
            aria-label={`Course ${i + 1}: ${course.heading}`}
          >
            <div
              className={`flex flex-col md:flex-row gap-8 items-center p-6 rounded-3xl ${
                ThemeConsumer().theme === "light-theme"
                  ? "bg-[#f0f0f0] shadow-xl border border-slate-200"
                  : "bg-black-gradient-2"
              }`}
            >
              {/* Video Section */}
              <div className="flex-1 aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-white/10 min-h-[200px]">
                {!showVideo[i] ? (
                  <button
                    className="w-full h-full relative group cursor-pointer"
                    onClick={() => handleVideoToggle(i)}
                    aria-label={`Play video for ${course.heading}`}
                  >
                    <img
                      src={course.thumbnail}
                      alt={`Thumbnail for ${course.heading} course video`}
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
                    src={course.video}
                    title={`Video player for ${course.heading}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}
              </div>

              {/* Text Section */}
              <div className="flex-1 flex flex-col gap-12">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {course.heading}
                  </h3>
                  <div
                    className="flex items-center mt-3 space-x-2"
                    aria-label={`Rating for ${course.heading}`}
                  >
                    <span className="text-yellow-500 font-semibold text-sm sm:text-base">
                      {course.starRating}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-yellow-500" : "text-yellow-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-light text-sm">
                      ({course.totalRatings} ratings)
                    </span>
                  </div>
                  <p className="mt-4 text-sm md:text-base text-light leading-relaxed">
                    {course.subHeading}
                  </p>
                </div>
                <div>
                  <div
                    className="flex items-center gap-3"
                    aria-label={`Pricing for ${course.heading}`}
                  >
                    <p className="text-lg font-bold">
                      {course.discountedPrice}
                    </p>
                    <p className="text-sm line-through text-light font-semibold">
                      {course.realPrice}
                    </p>
                  </div>
                  <p className="text-xs font-bold text-light mt-1">
                    {course.discount}Off
                  </p>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center w-full p-2 rounded-lg bg-orange-gradient font-bold tracking-wide transition-transform hover:scale-105 text-white"
                    aria-label={`View ${course.heading} on Udemy`}
                  >
                    Check Udemy Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={scrollLeft}
          className="p-2 rounded-full bg-orange-gradient text-white hover:scale-105 transition-transform cursor-pointer"
          aria-label="Scroll to previous course"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="p-2 rounded-full bg-orange-gradient text-white hover:scale-105 transition-transform cursor-pointer"
          aria-label="Scroll to next course"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Udemy;
