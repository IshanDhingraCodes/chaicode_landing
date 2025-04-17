import React from "react";
import { featureBlock } from "../constants";
import LeetLabIcon from "./ui/LeetlabIcon";
import PeerCodeReviewIcon from "./ui/PeerCodeReviewIcon";
import AlumniNetworkIcon from "./ui/AlumniNetworkIcon";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="my-30" aria-label="Cohort Features and Benefits">
      {/* heading */}
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider">
          <span className="text-gradient">Key Benefits</span> of Cohorts
        </h1>
        <p className="md:text-lg light-text mx-4 mt-5">
          Cohorts are the best way to learn because you finish the course in a
          timely manner
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 gap-y-6 max-w-7xl mx-auto mt-20 px-4 sm:px-6 md:px-10">
        {/* professional */}
        <motion.div
          className={`md:col-span-3 feature-bg rounded-3xl flex flex-col items-center justify-between p-5 min-h-[320px] transform hover:scale-105 transition-transform duration-300`}
          aria-label={featureBlock[0].title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={featureBlock[0].images}
            alt={featureBlock[0].title}
            className="w-full max-h-40 object-contain transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col items-center text-center mt-4">
            <p className="feature-heading text-xl sm:text-2xl font-bold">
              {featureBlock[0].title}
            </p>
            <p className="light-text mt-2">{featureBlock[0].description}</p>
          </div>
        </motion.div>

        {/* bounties */}
        <motion.div
          className="md:col-span-3 feature-bg rounded-3xl flex flex-col md:flex-row items-center justify-center p-5 gap-4 min-h-[320px] transform hover:scale-105 transition-transform duration-300"
          aria-label={featureBlock[1].title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={featureBlock[1].images}
            alt={featureBlock[1].title}
            className="w-full md:w-1/2 max-h-48 object-contain transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col gap-3 text-center md:text-left md:w-1/2">
            <p className="feature-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              {featureBlock[1].title}
            </p>
            <p className="light-text">{featureBlock[1].description}</p>
          </div>
        </motion.div>

        {/* leet lab */}
        <motion.div
          className="w-full feature-bg md:col-span-2 py-8 px-6 flex flex-col justify-between rounded-3xl min-h-[400px] transform hover:scale-105 transition-transform duration-300"
          aria-label={featureBlock[4].title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            <p className="feature-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              {featureBlock[4].title}
            </p>
            <p className="light-text">{featureBlock[4].description}</p>
            <div className="mt-2">
              <LeetLabIcon aria-label="LeetLab Icon" />
            </div>
          </div>
          <img
            src={featureBlock[4].images}
            alt={featureBlock[4].title}
            className="w-full max-h-40 object-contain mt-4 transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* peer & revision */}
        <div className="w-full md:col-span-2 grid grid-rows-2 gap-4">
          {/* peer */}
          <motion.div
            className="feature-bg flex flex-col items-center justify-between rounded-3xl p-4 min-h-[200px] transform hover:scale-105 transition-transform duration-300"
            aria-label={featureBlock[3].title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="feature-heading text-xl sm:text-2xl font-bold text-center mb-2">
              {featureBlock[3].title}
            </p>
            <PeerCodeReviewIcon aria-label="Peer Code Review Icon" />
            <p className="light-text mt-2 text-center">
              {featureBlock[3].description}
            </p>
          </motion.div>

          {/* revision */}
          <motion.div
            className="feature-bg flex flex-col items-center justify-between rounded-3xl p-4 min-h-[200px] transform hover:scale-105 transition-transform duration-300"
            aria-label={featureBlock[5].title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={featureBlock[5].images}
              alt={featureBlock[5].title}
              className="w-full max-h-24 object-contain mb-2 transform hover:scale-105 transition-transform duration-300"
            />
            <p className="feature-heading text-xl sm:text-2xl font-bold text-center">
              {featureBlock[5].title}
            </p>
            <p className="light-text mt-2 text-center">
              {featureBlock[5].description}
            </p>
          </motion.div>
        </div>

        {/* hostel */}
        <motion.div
          className="feature-bg md:col-span-2 p-6 flex flex-col items-center justify-around rounded-3xl min-h-[400px] transform hover:scale-105 transition-transform duration-300"
          aria-label={featureBlock[2].title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={featureBlock[2].images}
            alt={featureBlock[2].title}
            className="w-full max-h-40 object-contain transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col items-center text-center mt-4">
            <p className="feature-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              {featureBlock[2].title}
            </p>
            <p className="light-text mt-2">{featureBlock[2].description}</p>
          </div>
        </motion.div>

        {/* alumni */}
        <motion.div
          className="md:col-span-6 feature-bg flex flex-col md:flex-row items-center justify-between rounded-3xl p-6 gap-6 transform hover:scale-105 transition-transform duration-300"
          aria-label={featureBlock[6].title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AlumniNetworkIcon aria-label="Alumni Network Icon" />
          <div className="flex flex-col gap-2 md:w-2/3 text-center md:text-left">
            <p className="feature-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              {featureBlock[6].title}
            </p>
            <p className="light-text">{featureBlock[6].description}</p>
            <p className="light-text">{featureBlock[6].subDescription}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
