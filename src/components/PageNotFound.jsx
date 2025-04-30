import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff4e6] text-[#5c4033] text-center font-sans select-none">
      <div className="max-w-md px-6">
        <div className="w-[150px] mx-auto mb-8">
          {/* Chai cup SVG */}
          <svg viewBox="0 0 64 64" fill="none">
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="#FFB347"
              stroke="#5c4033"
              strokeWidth="2"
            />
            <path
              d="M20 24h24v16a8 8 0 01-8 8H28a8 8 0 01-8-8V24z"
              fill="#fff4e6"
              stroke="#5c4033"
              strokeWidth="2"
            />
            <path
              d="M26 20c0-2 4-2 4 0s4 2 4 0"
              stroke="#5c4033"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="text-[4rem] sm:text-[5rem] text-[#ff8c00] font-bold m-0">
          404
        </h1>
        <h2 className="text-2xl sm:text-[1.8rem] my-2">Oops! Chai not found</h2>
        <p className="text-base my-5">
          Looks like you&apos;ve spilled your chai or wandered too far.
        </p>
        <a
          href="/"
          className="inline-block px-5 py-2 bg-[#ffb347] text-white rounded-xl hover:bg-[#ff8c00] transition-colors duration-300 font-bold"
        >
          Go back to warmth
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
