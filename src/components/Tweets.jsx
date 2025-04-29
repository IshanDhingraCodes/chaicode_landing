import { useEffect } from "react";
import { ThemeConsumer } from "./ui/ThemeContext";
import TweetCard from "./ui/Tweet-card";
import { tweetUrls } from "../constants";
import CTA from "./ui/CTA";
import { motion } from "motion/react";
import GradientSeparator from "./ui/GradientSeparator";

export default function Tweets() {
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
    <section
      className="relative w-full mt-20 flex flex-col items-center justify-center"
      aria-label="Community Tweet Highlights"
    >
      <GradientSeparator />
      <div className="relative w-full h-full flex flex-col items-center justify-start md:justify-center md:pb-[50%] lg:pb-[30%] -mt-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="md:text-lg text-light mx-4">
            Love that we get from our community
          </p>
          <h1 className="text-4xl font-extrabold mt-5 tracking-wider">
            <span className="text-gradient">Tweet</span> Love
          </h1>
          <CTA
            text="Join Cohorts Live Classes"
            className="mt-10"
            aria-label="Join our live Cohorts classes"
          />
        </div>

        {/* Desktop version */}
        {tweetUrls.slice(0, 5).map((url, index) => {
          let extraclass = "";

          if (index === 0) extraclass = "lg:block top-[25%] lg:left-[1%]";
          else if (index === 1)
            extraclass = "md:block top-[30%] left-[5%] lg:left-[21%] z-2";
          else if (index === 2)
            extraclass = "md:block top-[35%] left-1/2 -translate-x-1/2 z-3";
          else if (index === 3)
            extraclass = "md:block top-[30%] right-[5%] lg:right-[21%] z-2";
          else if (index === 4) extraclass = "lg:block top-[25%] lg:right-[1%]";

          return (
            <div
              key={url}
              className={`absolute hidden my-10 ${extraclass}`}
              aria-label={`Embedded Tweet ${index + 1}`}
            >
              <TweetCard url={url} index={index} theme={theme} />
            </div>
          );
        })}

        {/* Mobile version */}
        <div
          className="h-[600px] my-14 md:hidden overflow-hidden grid sm:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
          aria-label="Scrolling tweets from our community"
        >
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-4 pb-4"
            aria-label="Tweet column scrolling up"
          >
            {[...tweetUrls, ...tweetUrls].map((url, index) => (
              <div key={`${url}-${index}`} aria-label={`Tweet ${index + 1}`}>
                <TweetCard url={url} index={index} theme={theme} />
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: ["-50%", "0%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-4 pb-4"
            aria-label="Tweet column scrolling down"
          >
            {[...tweetUrls, ...tweetUrls].map((url, index) => (
              <div
                key={`${url}-${index}-reverse`}
                aria-label={`Tweet ${index + 1} (reverse column)`}
              >
                <TweetCard url={url} index={index} theme={theme} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
