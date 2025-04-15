import { useEffect } from "react";
import { ThemeConsumer } from "./ThemeContext";
import TweetCard from "./ui/tweet-card";
import { tweetUrls } from "../constants";
import CTA from "./CTA";
import { motion } from "motion/react";

export default function TwitterTestimonials() {
  const { theme } = ThemeConsumer();

  useEffect(() => {
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <section className="relative  w-full  md:mt-10 flex items-center justify-center">
      <div className="relative w-full  h-full flex flex-col items-center  justify-start  md:justify-center  md:pb-[50%] lg:pb-[30%]">
        <div className="max-w-xl mx-auto text-center">
          <p className="md:text-lg light-text mx-4 ">
            Love that we get from our community
          </p>
          <h1 className="text-4xl font-extrabold mt-5 tracking-wider ">
            <span className="text-gradient">Tweet</span> Love
          </h1>
          <CTA text="Join Cohorts Live Classes" className="mt-10" />
        </div>

        {/* Desktop version */}

        {tweetUrls.slice(0, 5).map((url, index) => {
          let extraclass = "";

          if (index === 0) {
            extraclass = "lg:block top-[25%] lg:left-[3%] ";
          } else if (index === 1) {
            extraclass = "md:block  top-[30%] left-[5%] lg:left-[22%] z-2";
          } else if (index === 2) {
            extraclass = "md:block top-[35%] left-1/2 -translate-x-1/2 z-3";
          } else if (index === 3) {
            extraclass = "md:block top-[30%] right-[5%] lg:right-[22%] z-2";
          } else if (index === 4) {
            extraclass = "lg:block top-[25%] lg:right-[3%]";
          }

          return (
            <div key={url} className={`absolute hidden my-10 ${extraclass}`}>
              <TweetCard url={url} index={index} theme={theme} />
            </div>
          );
        })}

        {/* mobile version */}

        <div className="h-[600px]  my-14 md:hidden overflow-hidden grid sm:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: "-50%",
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className={`flex flex-col gap-4 pb-4`}
          >
            {[...tweetUrls, ...tweetUrls].map((url, index) => (
              <div key={url}>
                <TweetCard url={url} index={index} theme={theme} />
              </div>
            ))}
          </motion.div>

          {/* reverse */}
          <motion.div
            initial={{
              y: "-50%",
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className={`flex flex-col gap-4 pb-4`}
          >
            {[...tweetUrls, ...tweetUrls].map((url, index) => (
              <div key={url}>
                <TweetCard url={url} index={index} theme={theme} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
