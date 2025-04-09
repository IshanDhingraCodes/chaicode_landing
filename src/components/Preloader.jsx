import React from "react";
import { motion } from "motion/react";

const Preloader = () => {
  const slideUp = {
    initial: {
      y: "0",
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="bg-[#121212] fixed  w-screen flex justify-center items-center h-screen overflow-hidden z-900"
    >
      <div className="teacup-area">
        <div className="steam steam1"></div>
        <div className="steam steam2"></div>
        <div className="teacup">
          <div className="chai-liquid-level"></div>
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
        </div>
      </div>
      <div className="saucer"></div>

      <p className="font-DM-Serif-Text font-bold text-[#c75c1ea3] tracking-wider text-[min(4vw,40px)] relative top-15">
        “Brewing knowledge & chai... just a sip away.”
      </p>
    </motion.div>
  );
};

export default Preloader;
