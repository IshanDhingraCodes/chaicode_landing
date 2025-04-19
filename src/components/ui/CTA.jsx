import React from "react";
import { ThemeConsumer } from "./ThemeContext";
import Blinker from "./Blinker";

const CTA = ({ text, className }) => {
  const { theme } = ThemeConsumer();
  return (
    <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
      <button
        className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2  transition-transform duration-300 hover:scale-105  ${theme === "light-theme" ? "focus:ring-offset-slate-50" : "focus:ring-offset-slate-900"} ${className}`}
      >
        <span
          className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f3e8d5_0%,#f97316_50%,#f3e8d5_100%)]`}
        />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center font-bold justify-center rounded-full px-4 py-1.5 text-md  backdrop-blur-3xl ${theme === "light-theme" ? "bg-[#fcbb76] text-[#78350f]" : "bg-orange-gradient text-white"}`}
        >
          {text}
          <Blinker className="ml-3 z-20" />
        </span>
      </button>
    </a>
  );
};

export default CTA;
