import React, { useState } from "react";
import { ThemeConsumer } from "./ThemeContext";
import { chaicodeBlack, chaicodeWhite } from "../assets";
import { NavLinks } from "../constants";
import Blinker from "./Blinker";
import DarkModeToggle from "./DarkMode";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const { theme } = ThemeConsumer();

  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      height: 420,
      width: 300,
      top: "-3px",
      right: "-3px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    close: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const perspective = {
    initial: {
      opacity: 0,
    },
    enter: (i) => ({
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1 },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <nav className="xl:max-w-[1280px] px-4  mx-auto py-6 w-full flex justify-between">
      <a href="/">
        <img
          src={theme === "light-theme" ? chaicodeBlack : chaicodeWhite}
          alt="chaicode"
          className="w-[124px] h-[32px] "
        />
      </a>
      {/* --------------center links -----------------*/}
      <ul className="list-none md:flex hidden justify-center gap-14 items-center">
        {NavLinks.map((nav, i) => (
          <li
            key={i}
            className="light-text cursor-pointer font-normal text-[16px] "
          >
            {i === 0 ? (
              <a href={nav.link} className="flex items-center gap-2">
                {nav.title} <Blinker />
              </a>
            ) : (
              <a href={nav.link}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>
      <div className=" gap-4 md:flex hidden">
        <DarkModeToggle />
        <a
          href="https://courses.chaicode.com/learn/account/signin"
          className="bg-amber-600 hover:bg-amber-700  font-semibold py-2 px-6 rounded-xl shadow-md transition duration-200 ease-in-out"
        >
          Login
        </a>
      </div>

      <div className="relative md:hidden ">
        {/* ---------------------menu data----------------------------------- */}
        <motion.div
          variants={variants}
          animate={isActive ? "open" : "close"}
          initial="close"
          className=" bg-amber-600 rounded-3xl absolute backdrop-blur-md shadow-2xl"
        >
          <AnimatePresence>
            {isActive && (
              <div className="h-full px-8 pt-24 flex flex-col gap-7 box-border">
                {NavLinks.map((nav, i) => {
                  return (
                    <motion.div
                      variants={perspective}
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      custom={i}
                      key={i}
                    >
                      <a
                        href={nav.link}
                        className="text-[#000000] cursor-pointer decoration-0 text-3xl font-bold"
                      >
                        {nav.title}
                      </a>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={perspective}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  custom={NavLinks.length}
                >
                  <div className="mt-4 flex justify-between items-center">
                    <DarkModeToggle />
                    <a
                      href="https://courses.chaicode.com/learn/account/signin"
                      className="bg-[#000000] hover:bg-gray-800  font-semibold py-2 px-6 rounded-xl text-white"
                    >
                      Login
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/*----------------------- menu button-------------- */}
        <button
          aria-label={isActive ? "Close menu" : "Open menu"}
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="h-[40px] w-[100px]  rounded-3xl cursor-pointer absolute top-0 right-0  overflow-hidden  "
        >
          <motion.div
            animate={{ top: isActive ? "-100%" : "0" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative h-full w-full"
          >
            <div className="menu">
              <p>menu</p>
            </div>
            <div className="menu">
              <p>close</p>
            </div>
          </motion.div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
