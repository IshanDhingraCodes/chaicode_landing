import React from "react";
import { logos } from "../constants/";
import { motion } from "motion/react";

const LogoMarquee = () => {
  return (
    <>
      <div className="max-w-xl mx-auto text-center my-10 tracking-wider">
        <p className="sm:text-lg text-sm light-text mx-4 ">
          Our students are not only working in{" "}
          <span className="text-gradient font-bold">big tech companies</span>
        </p>
        <p className="sm:text-lg text-sm light-text mx-4 ">
          but are now <span className="text-gradient font-bold">founders</span>{" "}
          of funded startups and product creators
        </p>
      </div>
      <div className="overflow-hidden mx-auto w-[80%] py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-1 sm:gap-14  min-w-max"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 55,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="h-16 w-36 flex items-center justify-center shrink-0"
            >
              <img
                src={logo}
                alt="logo"
                className="h-10 object-contain max-w-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default LogoMarquee;
