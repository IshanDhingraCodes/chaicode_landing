import React, { useRef } from "react";
import { featureBlock } from "../constants";
import { motion, useScroll, useTransform } from "motion/react";

const Features = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const transforms = [
    useTransform(scrollYProgress, [0, 1], [0, -120]),
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, -180]),
  ];

  // merging transforms with data
  const blocks = featureBlock.map((block, i) => ({
    ...block,
    images: block.images.map((src, j) => ({
      src,
      y: transforms[i * 2 + j],
    })),
  }));
  return (
    <div
      ref={containerRef}
      className="min-h-screen py-20 space-y-5 sm:space-y-25 md:space-y-10 px-4 md:px-10 max-w-7xl mx-auto"
    >
      <div className="mx-auto text-center">
        <h1 className="text-6xl font-extrabold mt-5 tracking-wider ">
          <span className="text-gradient">Key Benefits</span> of Cohorts
        </h1>
        <p className="md:text-lg  mx-4 mt-5 ">
          Cohorts are best way to learn because you finish the course in a
          timely manner
        </p>
      </div>
      {blocks.map((block, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={index} className="p-6 md:p-10 ">
            <div
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center md:items-stretch justify-between gap-10`}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full md:w-1/2 h-[40vh] md:h-[50vh] flex justify-center items-end"
              >
                {block.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img.src}
                    alt={`feature-${index}-img-${i}`}
                    style={{ y: img.y }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ ease: "easeInOut" }}
                    className={`absolute object-cover transition-transform ${
                      i === 0
                        ? "w-[60%] md:w-[80%] z-10 left-1/2 -translate-x-1/2 bottom-0"
                        : "w-[50%] md:w-[70%] z-20 left-[30%] -translate-x-1/2  bottom-[3%]"
                    }  `}
                  />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  {block.title}
                </h2>
                <p className="text-base md:text-lg light-text">
                  {block.description}
                </p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
