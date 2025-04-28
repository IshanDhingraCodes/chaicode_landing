import React from "react";

const SocialIcon = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ml-6">
      <div className="text-light hover:text-amber-600 transition-colors duration-300">
        {children}
      </div>
    </a>
  );
};

export default SocialIcon;
