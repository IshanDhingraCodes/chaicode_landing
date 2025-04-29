import React from "react";
import { motion } from "motion/react";

const GradientSeparator = () => {
  return (
    <div className="relative w-full h-32 flex items-start justify-center overflow-visible mt-10 sm:mt-20">
      {/* Glowing expanding line from center */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="origin-center h-1 w-[80%] rounded-full bg-orange-400 shadow-[0_0_20px_4px_rgba(255,180,80,0.7)]"
      />

      {/* ambient light */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-2 left-1/2 -translate-x-1/2 h-[30vh] w-[90%] blur-[120px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,200,100,0.3), transparent 80%)",
        }}
      />
    </div>
  );
};

export default GradientSeparator;
