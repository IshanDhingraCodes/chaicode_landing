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
import WhyCard from "./ui/WhyCard";

const WhyChaiCode = () => {
  return (
    <section
      className="my-12 sm:my-16 md:my-24 lg:my-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Why Choose ChaiCode"
    >
      <div
        className="col-span-1 sm:col-span-2 lg:col-span-2 min-h-[200px] sm:min-h-[280px] flex flex-col items-center justify-center gap-4 sm:gap-5 p-4"
        aria-label="Introduction to ChaiCode"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-snug"
          aria-label="Main Heading"
        >
          But Why{" "}
          <span
            className="text-gradient text-4xl lg:text-6xl"
            aria-label="ChaiCode Highlight"
          >
            ChaiCode
          </span>{" "}
          ?
        </h1>
        <p
          className="text-light text-sm sm:text-base md:text-lg"
          aria-label="Tagline"
        >
          ChaiCode exists because we love tech and teaching
        </p>
      </div>

      {/* Curriculum */}
      <WhyCard
        icon={FileUser}
        title="Comprehensive Curriculum"
        description="Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand."
        ariaLabel="Comprehensive Curriculum Card"
      />

      {/* You Finish It */}
      <WhyCard
        icon={BookmarkCheck}
        title="You Finish It"
        description="Our cohorts are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community."
        ariaLabel="You Finish It Card"
      />

      {/* About */}
      <div
        className="col-span-1 sm:col-span-2 lg:col-span-4 bg-orange-gradient rounded-3xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center min-h-[200px] sm:min-h-[280px] shadow-lg"
        aria-label="About Hitesh Choudhary"
      >
        <div className="flex justify-center">
          <img
            src={hitesh}
            alt="Hitesh Choudhary"
            className="rounded-xl shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain"
            aria-label="Hitesh Choudhary Image"
          />
        </div>
        <div className="space-y-3 sm:space-y-4 text-center">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-black"
            aria-label="Instructor Name"
          >
            Hitesh Choudhary
          </h1>
          <p
            className="text-black/80 text-xs sm:text-sm md:text-base text-justify"
            aria-label="Instructor Bio"
          >
            Retired from corporate and full time YouTuber, ex-founder of LCO
            (acquired), ex-CTO, Sr. Director at PW. Runs 2 YouTube channels
            (950K and 470K subscribers), reached 43 countries.
          </p>
          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-black"
            aria-label="Teaching Approach Heading"
          >
            Approach
          </h2>
          <p
            className="text-black/80 text-xs sm:text-sm md:text-base text-justify"
            aria-label="Teaching Approach Description"
          >
            Project-based courses with peer learning and bounties across many
            activities.
          </p>
        </div>
      </div>

      {/* Industry Guests */}
      <WhyCard
        icon={Factory}
        title="Industry Guests"
        description="We're connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students."
        ariaLabel="Industry Guests Card"
      />

      {/* Code and Chill */}
      <WhyCard
        icon={FileJson}
        title="Code And Chill"
        description="Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place."
        ariaLabel="Code and Chill Card"
      />

      {/* Improve Communication */}
      <WhyCard
        icon={Speech}
        title="Improve Communication"
        description="One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together."
        ariaLabel="Improve Communication Card"
      />

      {/* Bounties */}
      <WhyCard
        icon={HandCoins}
        title="Bounties"
        description="Every cohort comes with exciting cash prizes and some even features a MacBook giveaway! It's our way of keeping the motivation high and the learning fun."
        ariaLabel="Bounties Card"
      />
    </section>
  );
};

export default WhyChaiCode;
