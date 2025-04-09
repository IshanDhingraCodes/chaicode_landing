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
        {/* Background */}
        <div
          className={`w-full h-full rounded-full border shadow-inner transition-colors duration-300 ${
            isDark ? "bg-white" : "bg-amber-600"
          }`}
        ></div>

        {/* Icon */}
        <div
          className={`absolute top-0 left-0 w-5 h-5 rounded-full border transform transition-transform duration-300 flex items-center justify-center ${
            isDark
              ? "translate-x-5 bg-amber-600 text-gray-950"
              : "bg-white text-amber-600"
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
