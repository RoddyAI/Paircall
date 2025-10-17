import { motion } from "motion/react";

export const renderAnimation = (type, isHovered) => {
  switch (type) {
    case "waveform":
      return (
        <div className="h-20 flex items-center justify-center space-x-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 bg-blue-400 rounded-full"
              animate={
                isHovered
                  ? {
                      height: [10, 30, 15, 40, 20, 35, 15, 25],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      },
                    }
                  : { height: 10 }
              }
            />
          ))}
        </div>
      );
    case "progress":
      return (
        <div className="h-20 flex flex-col justify-center space-y-2 px-6">
          {["Sales", "Support", "Retention"].map((skill, i) => (
            <div key={skill} className="flex items-center space-x-3">
              <span className="text-xs text-gray-400 w-16">{skill}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 bg-green-400 rounded-full"
                  animate={
                    isHovered
                      ? { width: `${60 + i * 15}%` }
                      : { width: "20%" }
                  }
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    case "chart":
      return (
        <div className="h-20 flex items-end justify-center space-x-1 px-6">
          {[60, 80, 45, 90, 70].map((height, i) => (
            <motion.div
              key={i}
              className="w-4 bg-purple-400 rounded-t"
              animate={
                isHovered ? { height: `${height}%` } : { height: "20%" }
              }
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};
