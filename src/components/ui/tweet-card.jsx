import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeConsumer } from "../ThemeContext";

function TweetCard({ url, index }) {
  const { theme } = ThemeConsumer();
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isInView && window.twttr) {
      window.twttr.widgets.load(ref.current);

      const maxWait = setTimeout(() => {
        setLoaded(true);
      }, 5000);

      const interval = setInterval(() => {
        const iframe = ref.current?.querySelector("iframe");
        if (iframe) {
          setLoaded(true);
          clearInterval(interval);
          clearTimeout(maxWait);
        }
      }, 200);
      return () => {
        clearInterval(interval);
        clearTimeout(maxWait);
      };
    }
  }, [isInView]);

  const bgColor = theme === "dark-theme" ? "bg-gray-900" : "bg-white";
  const ropeColor = theme === "dark-theme" ? "bg-gray-600" : "bg-gray-400";
  const textColor = theme === "dark-theme" ? "text-gray-600" : "text-gray-400";

  const twitterTheme = theme === "dark-theme" ? "dark" : "light";

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial={{ opacity: 0, y: -80, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{
        delay: index * 0.3,
        type: "spring",
        stiffness: 50,
        damping: 8,
      }}
      className="relative flex flex-col items-center"
    >
      {/* Rope */}
      <div className={`w-px h-6 ${ropeColor} mb-2`} />

      {/* Fixed-height wrapper for tweet */}
      <div
        className={`relative rounded-xl shadow-md ${bgColor} w-full h-[380px] overflow-hidden p-2`}
      >
        {isInView && (
          <blockquote
            className="twitter-tweet absolute inset-0"
            data-theme={twitterTheme}
            style={{
              margin: 0,
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: loaded ? "auto" : "none",
            }}
          >
            <a href={url}></a>
          </blockquote>
        )}

        {!loaded && (
          <div
            className={`h-full flex items-center justify-center ${textColor} text-sm italic`}
          >
            Loading tweet...
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default TweetCard;
