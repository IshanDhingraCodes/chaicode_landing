import React from "react";
import {
  FileUser,
  BookmarkCheck,
  Factory,
  FileJson,
  Speech,
  HandCoins,
} from "lucide-react";
import { hitesh } from "../assets";

const WhyChaiCode = () => {
  return (
    <section className="my-12 sm:my-16 md:my-24 lg:my-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* But Why */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 min-h-[200px] sm:min-h-[280px] flex flex-col items-center justify-center gap-4 sm:gap-5 p-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
          But Why{" "}
          <span className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            ChaiCode
          </span>{" "}
          ?
        </h1>
        <p className="text-light text-sm sm:text-base md:text-lg">
          ChaiCode exists because we love tech and teaching
        </p>
      </div>

      {/* Curriculum */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 min-h-[200px] sm:min-h-[280px] bg-black-gradient rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7">
        <div className="text-light">
          <FileUser size={48} sm={56} md={64} />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Comprehensive Curriculum
        </h1>
        <p className="text-light text-xs sm:text-sm md:text-base text-justify">
          Master key concepts and hands-on skills with clarity and confidence.
          Learn what truly matters, the right way, thorough, practical, and easy
          to understand.
        </p>
      </div>

      {/* You Finish It */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 min-h-[200px] sm:min-h-[280px] bg-black-gradient rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7">
        <div className="text-light">
          <BookmarkCheck size={48} sm={56} md={64} />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
          You Finish It
        </h1>
        <p className="text-light text-xs sm:text-sm md:text-base text-justify">
          Our cohorts are a collaborative journey, students learn together, stay
          motivated, and complete the course on time as a community.
        </p>
      </div>

      {/* About */}
      <div className="col-span-1 sm:col-span-2 md:col-span-4 bg-amber-500 rounded-3xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center min-h-[200px] sm:min-h-[280px]">
        <div className="flex justify-center">
          <img
            src={hitesh}
            alt="Hitesh Choudhary"
            className="rounded-xl shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain"
          />
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-black">
            Hitesh Choudhary
          </h1>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify">
            Retired from corporate and full time YouTuber, ex-founder of LCO
            (acquired), ex-CTO, Sr. Director at PW. Runs 2 YouTube channels
            (950K and 470K subscribers), reached 43 countries.
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-black">
            Approach
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify">
            Project-based courses with peer learning and bounties across many
            activities.
          </p>
        </div>
      </div>

      {/* Industry Guests */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 min-h-[200px] sm:min-h-[280px] bg-black-gradient rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7">
        <div className="text-light">
          <Factory size={48} sm={56} md={64} />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
          Industry Guests
        </h1>
        <p className="text-light text-xs sm:text-sm md:text-base text-justify">
          We're connected with industry experts and regularly bring them into
          our classes for engaging, fun, and insightful sessions with students.
        </p>
      </div>

      {/* Code and Chill */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 min-h-[200px] sm:min-h-[280px] bg-black-gradient rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7">
        <div className="text-light">
          <FileJson size={48} sm={56} md={64} />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
          Code And Chill
        </h1>
        <p className="text-light text-xs sm:text-sm md:text-base text-justify">
          Coding should be fun, not frightening. It might feel tough at first,
          but with time and practice, everything starts to click and fall into
          place.
        </p>
      </div>

      {/* Improve Communication */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 min-h-[200px] sm:min-h-[280px] bg-black-gradient rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7">
        <div className="text-light">
          <Speech size={48} sm={56} md={64} />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
          Improve Communication
        </h1>
        <p className="text-light text-xs sm:text-sm md:text-base text-justify">
          One of the best ways to boost communication skills is through
          practice. Our peer classes make it happen where co-learners teach,
          share, and grow together.
        </p>
      </div>

      {/* Bounties */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 min-h-[200px] sm:min-h-[280px] bg-black-gradient rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-7">
        <div className="text-light">
          <HandCoins size={48} sm={56} md={64} />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
          Bounties
        </h1>
        <p className="text-light text-xs sm:text-sm md:text-base text-justify">
          Every cohort comes with exciting cash prizes and some even features a
          MacBook giveaway! It's our way of keeping the motivation high and the
          learning fun.
        </p>
      </div>
    </section>
  );
};

export default WhyChaiCode;
