import React from "react";
import { ThemeConsumer } from "./ThemeContext";

const DarkMode = () => {
  const { toggleTheme, theme } = ThemeConsumer();

  return (
    <button onClick={toggleTheme}>
      {theme === "light-theme" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default DarkMode;
