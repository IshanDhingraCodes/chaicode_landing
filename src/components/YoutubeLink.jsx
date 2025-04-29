import React from "react";
import { youtube } from "../assets";
import { ThemeConsumer } from "./ui/ThemeContext";
import { youtubeCard } from "../constants";
import { motion, AnimatePresence } from "motion/react";

const YoutubeLink = () => {
  const { theme } = ThemeConsumer();

  const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="my-20" aria-label="YouTube Channels Section">
      <div className="flex flex-col md:flex-row items-center justify- h-full w-full gap-10">
        <div
          className="w-full h-full"
          role="img"
          aria-label="Hitesh's YouTube Preview Image"
        >
          <img
            src={youtube}
            alt="Hitesh Choudhary's YouTube"
            className="max-h-[600px]"
          />
        </div>

        <div
          className="w-full h-full flex flex-col items-center justify-center gap-5"
          aria-label="List of YouTube channel cards"
        >
          <AnimatePresence>
            {youtubeCard.map((card, i) => (
              <motion.article
                className={`w-full h-full flex flex-col items-start justify-center gap-3 p-4 rounded-2xl ${
                  theme === "light-theme"
                    ? "bg-[#f0f0f0] shadow-lg border border-slate-200"
                    : "bg-black-gradient-2"
                }`}
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true, amount: 0.3 }}
                aria-label={`Card for ${card.channel}`}
              >
                <header className="flex items-center justify-center gap-6">
                  <div
                    className="bg-orange-gradient p-2 rounded-full"
                    aria-hidden="true"
                  >
                    {/* YouTube SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube-icon"
                      aria-hidden="true"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-xl">{card.channel}</p>
                    <p className="font-normal text-sm text-light">{card.tag}</p>
                  </div>
                </header>

                <div
                  className="flex items-center justify-center gap-3"
                  role="group"
                  aria-label="Channel statistics"
                >
                  <p
                    className={`p-2 rounded-full text-sm text-light ${
                      theme === "light-theme"
                        ? "bg-[#f8f8f8] shadow-lg border border-slate-200"
                        : "bg-slate-800"
                    }`}
                    aria-label={`${card.subscribers} subscribers`}
                  >
                    <span className="text-gradient font-bold tracking-wider">
                      {card.subscribers}
                    </span>{" "}
                    subscribers
                  </p>
                  <p
                    className={`p-2 rounded-full text-sm text-light ${
                      theme === "light-theme"
                        ? "bg-[#f8f8f8] shadow-lg border border-slate-200"
                        : "bg-slate-800"
                    }`}
                    aria-label={`${card.totalVideos} videos`}
                  >
                    <span className="text-gradient font-bold tracking-wider">
                      {card.totalVideos}
                    </span>{" "}
                    videos
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between w-full">
                  <p className="font-bold text-3xl">{card.language}</p>
                  <a
                    href={card.link}
                    rel="noopener noreferrer"
                    aria-label={`Visit ${card.channel} channel on YouTube`}
                    className="bg-orange-gradient py-2 px-4 rounded-xl text-sm hover:scale-105 transition duration-200 ease-in cursor-pointer flex gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link-icon"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    Visit Channel
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default YoutubeLink;
