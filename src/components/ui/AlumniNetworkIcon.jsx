import { motion } from "motion/react";

export default function AlumniNetworkIcon() {
  const avatars = [
    { cx: 25, cy: 35, fill: "#fbbf24" },
    { cx: 75, cy: 35, fill: "#f472b6" },
    { cx: 30, cy: 70, fill: "#34d399" },
    { cx: 70, cy: 70, fill: "#a78bfa" },
    { cx: 20, cy: 55, fill: "#fcd34d" },
    { cx: 80, cy: 55, fill: "#818cf8" },
  ];

  return (
    <div className="  group relative">
      <motion.div
        className="w-full h-full transition-transform duration-300 "
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Central user avatar */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="#60a5fa"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* Animated connection lines */}
          {[
            { x2: 25, y2: 35 },
            { x2: 75, y2: 35 },
            { x2: 30, y2: 70 },
            { x2: 70, y2: 70 },
            { x2: 20, y2: 55 },
            { x2: 80, y2: 55 },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={line.x2}
              y2={line.y2}
              stroke="#6b7280"
              strokeWidth="1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            />
          ))}

          {/* Connected avatars with ping and interactivity */}
          {avatars.map((avatar, i) => (
            <g key={i}>
              <circle cx={avatar.cx} cy={avatar.cy} r="4" fill={avatar.fill} />
              <motion.circle
                cx={avatar.cx}
                cy={avatar.cy}
                r="6"
                fill="none"
                stroke={avatar.fill}
                strokeWidth="1"
                animate={{ r: [4, 6, 4], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}

          {/* Job briefcase - floating but staying inside bounds */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ y: [10, -2, 10], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="45" y="25" width="10" height="8" rx="1" fill="#f59e0b" />
            <rect x="47" y="23" width="6" height="3" rx="0.5" fill="#f59e0b" />
          </motion.g>

          {/* Pulsing effect */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            animate={{ r: [12, 14, 12], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
