import React from "react";

const SocialIcon = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="xs:ml-6"
    >
      <div className="text-light hover:scale-110 transition hover:bg-[#ffffff] hover:shadow-2xl hover:border-slate-200 p-1 rounded-full duration-300">
        {children}
      </div>
    </a>
  );
};

export default SocialIcon;
