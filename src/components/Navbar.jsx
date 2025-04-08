import React from "react";
import { ThemeConsumer } from "./ThemeContext"; // Adjust import path as needed
import { chaicodeBlack, chaicodeWhite } from "../assets";

const Navbar = () => {
  const { theme } = ThemeConsumer();
  
  return (
    <nav className="xl:max-w-[1280px] mx-auto py-6 w-full flex justify-between items-center">
      <a href="/">
        <img
          src={theme === "light-theme" ? chaicodeBlack : chaicodeWhite}
          alt="chaicode"
          className="w-[124px] h-[32px]"
        />
      </a>
    </nav>
  );
};

export default Navbar;