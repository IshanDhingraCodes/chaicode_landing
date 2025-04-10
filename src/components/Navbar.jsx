import React, { useState, useEffect, useRef } from "react";
import { ThemeConsumer } from "./ThemeContext";
import { chaicodeBlack, chaicodeWhite } from "../assets";
import { NavLinks } from "../constants";
import Blinker from "./Blinker";
import DarkModeToggle from "./DarkMode";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const { theme } = ThemeConsumer();

  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wrapperVariants = {
    scrolled: { top: "1rem" },
    default: { top: "0rem" },
  };

  const navbarVariants = {
    scrolled: {
      backgroundColor:
        theme === "light-theme"
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(20, 20, 20, 0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow:
        theme === "light-theme"
          ? "0 4px 20px rgba(0, 0, 0, 0.08)"
          : "0 4px 20px rgba(255, 255, 255, 0.05)",
      borderRadius: "1rem",
      transition: { duration: 0.5 },
    },
    default: {
      backgroundColor: "transparent",
      backdropFilter: "none",
      boxShadow: "none",
      borderRadius: "0",
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    open: {
      height: 420,
      width: 300,
      top: "-3px",
      right: "-3px",
      transition: { duration: 0.3 },
    },
    close: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  const fadeVariant = {
    initial: { opacity: 0 },
    enter: (i) => ({
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1 },
    }),
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      variants={wrapperVariants}
      animate={scrolled ? "scrolled" : "default"}
      className="sticky  z-50 px-4 sm:px-6 md:px-8 "
    >
      <motion.nav
        className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:px-8 flex justify-between"
        animate={scrolled ? "scrolled" : "default"}
        variants={navbarVariants}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="Chaicode Home">
          <img
            src={theme === "light-theme" ? chaicodeBlack : chaicodeWhite}
            alt="Chaicode logo"
            className="w-[124px] h-[32px]"
            loading="eager"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {NavLinks.map((nav, i) => (
            <li key={i}>
              <a
                href={nav.link}
                className="text-[16px] light-text font-medium  "
              >
                {i === 0 ? (
                  <span className="flex items-center gap-2">
                    {nav.title} <Blinker />
                  </span>
                ) : (
                  nav.title
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          <a
            href="https://courses.chaicode.com/learn/account/signin"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="relative md:hidden" ref={menuRef}>
          <motion.div
            variants={menuVariants}
            animate={isActive ? "open" : "close"}
            initial="close"
            className={`absolute rounded-3xl overflow-hidden ${
              theme === "light-theme" ? "bg-gray-200" : "bg-amber-600"
            } shadow-xl backdrop-blur-md`}
          >
            <AnimatePresence>
              {isActive && (
                <div className="h-full px-6 pt-24 flex flex-col gap-6">
                  {NavLinks.map((nav, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeVariant}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <a
                        href={nav.link}
                        className="text-black text-2xl font-semibold"
                      >
                        {nav.title}
                      </a>
                    </motion.div>
                  ))}

                  <motion.div
                    custom={NavLinks.length}
                    variants={fadeVariant}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <div className="mt-4 flex justify-between items-center">
                      <DarkModeToggle />
                      <a
                        href="https://courses.chaicode.com/learn/account/signin"
                        className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-xl"
                      >
                        Login
                      </a>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Toggle Button */}
          <button
            aria-label={isActive ? "Close menu" : "Open menu"}
            onClick={() => setIsActive((prev) => !prev)}
            className="absolute top-0 right-0 w-[100px] h-[40px] rounded-3xl overflow-hidden"
          >
            <motion.div
              animate={{ top: isActive ? "-100%" : "0%" }}
              transition={{ duration: 0.4 }}
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
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
