import React from "react";
import { ThemeConsumer } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const { toggleTheme, theme } = ThemeConsumer();
  const isDark = theme === "dark-theme";

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative w-10 h-5">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        {/* ------------------Background---------------- */}
        <div
          className={`w-full h-full rounded-full shadow-inner transition-colors duration-300 border ${
            isDark
              ? "bg-neutral-800 border-neutral-600"
              : "bg-amber-300 border-neutral-400"
          }`}
        ></div>

        {/* --------------------Icon------------------------- */}
        <div
          className={`absolute top-0 left-0 w-5 h-5 rounded-full  transform transition-transform duration-300 flex items-center justify-center shadow-lg  ${
            isDark
              ? "translate-x-5 bg-amber-400 text-black"
              : "bg-amber-500 text-white"
          }`}
        >
          {isDark ? (
            <Moon size={12} className="transition-all duration-300" />
          ) : (
            <Sun size={12} className="transition-all duration-300" />
          )}
        </div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
