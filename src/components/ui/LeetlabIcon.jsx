import { useEffect, useState } from "react";

const codeText = "function optimizeSolution(algorithm) {/*  .... */}";

export default function LeetLabIcon() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 60;

    if (index < codeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeText.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const resetDelay = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
      return () => clearTimeout(resetDelay);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-start font-mono text-sm ">
      {/* Static window control dots */}
      <div className="flex space-x-1 mb-1">
        <div className="w-2 h-2 bg-red-400 rounded-full" />
        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
        <div className="w-2 h-2 bg-green-400 rounded-full" />
      </div>

      {/* Typing code line */}
      <div className="flex items-center ">
        <span>{displayedText}</span>
        <span className="w-1 h-4 bg-blue-500 ml-1 animate-pulse" />
      </div>
    </div>
  );
}
