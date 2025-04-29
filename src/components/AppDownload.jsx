import React from "react";
import { ThemeConsumer } from "./ui/ThemeContext";
import { Zap, Bell, Smartphone } from "lucide-react";
import { phone } from "../assets";
import { motion } from "motion/react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.3, ease: "easeOut" },
  }),
};

const AppDownload = () => {
  const { theme } = ThemeConsumer();

  return (
    <section className="flex md:flex-row flex-col px-4 md:px-10 my-20 gap-10">
      <div className="flex-1 flex justify-center items-start flex-col gap-8">
        <motion.h2
          className="text-4xl lg:text-5xl md:leading-15 lg:leading-[55px] font-semibold text-center lg:text-start text-gradient"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          aria-label="Learn on the go"
        >
          Learn on the go
        </motion.h2>
        <motion.p
          className="text-light text-justify"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          aria-label="Take your coding journey anywhere with the ChaiCode mobile app."
        >
          Take your coding journey anywhere with the ChaiCode mobile app. Access
          courses, join live sessions, and connect with the community - all from
          your pocket.
        </motion.p>
        <motion.ul
          className="text-[18px] font-semibold flex flex-col gap-5"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          role="list"
          aria-label="App features"
        >
          <li className="flex items-center gap-5">
            <div
              className={`p-2 rounded-full ${
                theme === "light-theme"
                  ? "bg-orange-gradient shadow-lg border border-slate-200 text-white"
                  : "bg-black-gradient"
              }`}
              role="img"
              aria-label="Offline course access"
            >
              <Zap />
            </div>
            Offline course access
          </li>
          <li className="flex items-center gap-5">
            <div
              className={`p-2 rounded-full ${
                theme === "light-theme"
                  ? "bg-orange-gradient shadow-lg border border-slate-200 text-white"
                  : "bg-black-gradient"
              }`}
              role="img"
              aria-label="Live session notifications"
            >
              <Bell />
            </div>
            Live session notifications
          </li>
          <li className="flex items-center gap-5">
            <div
              className={`p-2 rounded-full ${
                theme === "light-theme"
                  ? "bg-orange-gradient shadow-lg border border-slate-200 text-white"
                  : "bg-black-gradient"
              }`}
              role="img"
              aria-label="Revision while commuting"
            >
              <Smartphone />
            </div>
            Revision while commuting
          </li>
        </motion.ul>
        <div className="flex items-center md:justify-start justify-center w-full gap-3">
          <motion.a
            href="https://apps.apple.com/in/app/chaicode/id6504993143"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <div
              className={`flex p-2 gap-3 items-center bg-orange-gradient rounded-2xl hover:scale-105 transition duration-200 ease-in-out w-[150px] sm:w-[175px]`}
              role="button"
              aria-label="Download on the App Store"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                </svg>
              </div>
              <div className="text-white">
                <p className="text-xs sm:text-sm">Download on the</p>
                <p className="font-bold tracking-wide text-md sm:text-lg">
                  App Store
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on Google Play"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            <div
              className={`flex p-2 gap-3 items-center bg-orange-gradient rounded-2xl hover:scale-105 transition duration-200 ease-in-out w-[150px] sm:w-[175px]`}
              role="button"
              aria-label="Download on Google Play"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  fill="white"
                >
                  <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
                </svg>
              </div>
              <div className="text-white">
                <p className="text-xs sm:text-sm">Get it on </p>
                <p className="font-bold tracking-wide text-md sm:text-lg">
                  Google Play
                </p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
      <motion.div
        className="flex-1 flex justify-center items-center lg:ml-10 ml-0 md:mt-0 mt-4 relative"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          src={phone}
          alt="Phone displaying ChaiCode mobile app"
          loading="lazy"
          className="h-full max-h-[550px] max-w-full rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default AppDownload;
