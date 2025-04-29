import React from "react";
import { ThemeConsumer } from "./ThemeContext";

const FeedbackCard = ({ content, name, title }) => {
  const { theme } = ThemeConsumer();

  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    const initials = (names[0]?.[0] || "") + (names[1]?.[0] || "");
    return initials.toUpperCase();
  };

  return (
    <div
      className={`flex justify-between flex-col p-6 rounded-[20px] max-w-[370px] my-5 ${theme === "light-theme" ? "bg-[#f0f0f0] shadow-lg border border-slate-200" : "bg-black-gradient"}`}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 43 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z"
          fill="url(#paint0_linear_310_509)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_310_509"
            x1="28.8615"
            y1="-24.7969"
            x2="41.7939"
            y2="24.1471"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00887753" stopColor="#FFFFFF" />
            <stop offset="0.1723" stopColor="#FFE5CC" />
            <stop offset="0.4204" stopColor="#FFCC99" />
            <stop offset="0.5512" stopColor="#FFB366" />
            <stop offset="0.7154" stopColor="#FF9933" />
            <stop offset="1" stopColor="#FF8000" />
          </linearGradient>
        </defs>
      </svg>
      <p className="font-normal text-[18px] leading-[32.4px] my-10">
        {content}
      </p>

      <div className="flex flex-row items-center">
        <div
          className="w-[40px] h-[40px] rounded-full bg-orange-gradient flex items-center justify-center"
          aria-label={`Avatar for ${name}`}
          title={name}
        >
          <span className="text-white font-bold text-[20px]">
            {getInitials(name)}
          </span>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-[20px] leading-[32px]">{name}</h4>
          <p className="font-normal text-[16px] leading-[24px] text-light">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
