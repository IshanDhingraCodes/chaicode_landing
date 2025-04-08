import React from "react";
import { ThemeConsumer } from "./ThemeContext";
import { chaicodeBlack, chaicodeWhite } from "../assets";
import { NavLinks } from "../constants";
import Blinker from "./Blinker";
import DarkModeToggle from "./DarkMode";

const Navbar = () => {
  const { theme } = ThemeConsumer();

  return (
    <nav className="xl:max-w-[1280px] px-4  mx-auto py-6 w-full flex justify-between items-center">
      <a href="/">
        <img
          src={theme === "light-theme" ? chaicodeBlack : chaicodeWhite}
          alt="chaicode"
          className="w-[124px] h-[32px]"
        />
      </a>
      <ul className="list-none md:flex hidden justify-center gap-14 items-center flex-1">
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
    </nav>
  );
};

export default Navbar;
