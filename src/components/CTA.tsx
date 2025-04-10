import React from "react";
import { ThemeConsumer } from "./ThemeContext";
import Blinker from "./Blinker";

const CTA = ({ text, className }) => {
  const { theme } = ThemeConsumer();
  return (
    <a href="https://courses.chaicode.com/learn">
      <button
        className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2   ${theme === "light-theme" ? "focus:ring-offset-slate-50" : "focus:ring-offset-slate-900"} ${className}`}
      >
        <span
          className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f3e8d5_0%,#f97316_50%,#f3e8d5_100%)]`}
        />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full   px-4 py-1.5 text-sm font-medium   backdrop-blur-3xl ${theme === "light-theme" ? "bg-[#fcbb76] text-[#78350f]" : "bg-[#78350f] text-[#fde68a]"}`}
        >
          {text}
          <Blinker className="ml-3" />
        </span>
      </button>
    </a>
  );
};

export default CTA;
