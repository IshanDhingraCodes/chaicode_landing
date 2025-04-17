import { motion } from "motion/react";

export default function PeerCodeReviewIcon() {
  return (
    <motion.div
      className="w-24 h-24 md:w-28 md:h-28"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Terminal-style Code Window */}
        <motion.rect
          x="10"
          y="20"
          rx="6"
          width="80"
          height="60"
          fill="#1e1e1e"
          stroke="#4b5563"
          strokeWidth="2"
          initial={{ y: 0 }}
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Terminal top bar */}
        <circle cx="18" cy="26" r="2" fill="#ef4444" />
        <circle cx="24" cy="26" r="2" fill="#f59e0b" />
        <circle cx="30" cy="26" r="2" fill="#10b981" />

        {/* Code lines with < > symbols */}
        <text x="20" y="38" fill="#93c5fd" fontSize="6" fontFamily="monospace">
          &lt;div&gt; Hello{" "}
        </text>
        <text x="20" y="48" fill="#93c5fd" fontSize="6" fontFamily="monospace">
          &lt;/div&gt;
        </text>

        {/* Microscope glass animation - constrained to terminal bounds */}
        <motion.g
          initial={{ x: 10, opacity: 0, rotate: -15 }}
          animate={{
            x: [0, 30, 2],
            opacity: [0, 1, 1, 0],
            rotate: [-15, -15, -15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
          transform="rotate(-15 50 45)"
        >
          {/* Microscope lens */}
          <circle
            cx="50"
            cy="45"
            r="8"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="1.5"
          />

          {/* Microscope handle */}
          <line
            x1="50"
            y1="53"
            x2="50"
            y2="63"
            stroke="#4b5563"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="65" r="2" fill="#4b5563" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
