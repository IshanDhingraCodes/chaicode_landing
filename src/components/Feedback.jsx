import React, { useRef, useEffect, useState } from "react";
import FeedbackCard from "./ui/FeedbackCard";
import { feedbacks } from "../constants";
import { useTransform, useScroll, motion } from "motion/react";
import { ThemeConsumer } from "./ui/ThemeContext";
import CTA from "./ui/CTA";

const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return dimension;
};

const Feedback = () => {
  const { theme } = ThemeConsumer();
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div
      className="w-full h-full flex flex-col items-center"
      role="main"
      aria-label="Student Testimonials Section"
    >
      <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-20">
        <p
          className={`inline-flex py-2 px-4 rounded-full tracking-wider font-semibold my-10 ${
            theme === "light-theme"
              ? "bg-[#f0f0f0] shadow-lg border border-slate-200 text-gray-700"
              : "bg-black-gradient"
          }`}
          aria-label="Testimonials badge"
        >
          &#123; Testimonials &#125;
        </p>
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-wider"
          id="feedback-heading"
        >
          Our Students <span className="text-gradient">Feedback</span>
        </h1>
        <p
          className="md:text-lg text-light mx-4 mt-5"
          aria-describedby="feedback-heading"
        >
          Explore the incredible advantages of enrolling in our courses and
          enhancing your skills
        </p>
      </div>

      {/* Mobile testimonial loop */}
      <div
        className="h-[700px] w-full flex flex-col sm:hidden items-center mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        role="region"
        aria-labelledby="feedback-heading"
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          role="list"
        >
          {[...feedbacks, ...feedbacks].map((feedback, i) => (
            <div
              key={i}
              className="w-full relative object-cover min-w-[250px] overflow-hidden"
              role="listitem"
            >
              <FeedbackCard
                content={feedback.content}
                name={feedback.name}
                title={feedback.title}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop columns with scroll-based animation */}
      <div
        ref={container}
        className="h-[175vh] box-border items-center justify-center gap-5 overflow-hidden hidden sm:flex [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        role="region"
        aria-labelledby="feedback-heading"
      >
        <Column
          feedbacks={[feedbacks[0], feedbacks[1], feedbacks[2]]}
          y={y}
          className="top-[-45%] hidden sm:block"
        />
        <Column
          feedbacks={[feedbacks[3], feedbacks[4], feedbacks[5]]}
          y={y2}
          className="top-[-80%] hidden sm:block"
        />
        <Column
          feedbacks={[feedbacks[6], feedbacks[7], feedbacks[8]]}
          y={y3}
          className="top-[-22%] hidden md:block"
        />
        <Column
          feedbacks={[feedbacks[9], feedbacks[10], feedbacks[11]]}
          y={y4}
          className="top-[-75%] hidden lg:block"
        />
      </div>

      <div className="mt-10 md:mt-20">
        <CTA text="Join Cohorts Live Classes" />
      </div>
    </div>
  );
};

const Column = ({ feedbacks, y = 0, className }) => {
  return (
    <motion.div
      style={{ y, willChange: "transform" }}
      className={`w-full h-full flex flex-col items-center justify-center relative ${className}`}
      role="list"
    >
      {feedbacks.map((feedback, i) => (
        <div
          key={i}
          className="w-full relative object-cover min-w-[250px] overflow-hidden"
          role="listitem"
        >
          <FeedbackCard
            content={feedback.content}
            name={feedback.name}
            title={feedback.title}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Feedback;
