import React from "react";
import CTA from "./CTA";
import { ThemeConsumer } from "./ThemeContext";

const Hero = () => {
  const { theme } = ThemeConsumer();
  return (
    <section className="relative  py-20 overflow-hidden">
      <div
        className={`absolute inset-0  opacity-80 pointer-events-none ${theme === "light-theme" ? "bg-grid-pattern" : "darkbg-grid-pattern"}`}
      />
      <main className="py-24 relative flex flex-col justify-center items-center">
        <p className="inline-flex py-2 px-4 bg-radial from-orange-400 from-40% to-orange-700 rounded-full tracking-wider font-semibold">
          &#123; Trusted By 1.5M Code Learners &#125;
        </p>

        <h1 className="text-4xl md:text-6xl  lg:text-7xl  text-center font-medium mt-14 tracking-wide max-w-screen-xl">
          <span className="text-gradient">Consistency</span> And{" "}
          <span className="text-gradient">Community</span> Learning For Coding
          Courses
        </h1>
        <p className=" md:text-xl light-text  mt-10 max-w-screen-lg sm:text-center text-justify mx-4 ">
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, peer learning peer code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </p>
        <CTA text="Check All Live Cohorts" className="mt-10" />
      </main>
    </section>
  );
};

export default Hero;
