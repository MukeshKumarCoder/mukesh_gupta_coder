import { motion } from "framer-motion";
import { useState } from "react";
import { skillData } from "../data/SkillData";

export default function SwingDiv() {
  const [index, setIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);

  return (
    <div className="relative w-full h-full flex justify-center overflow-hidden">
      <motion.div
        className="absolute top-14 flex flex-col items-center"
        animate={{
          rotate: [-140, 140, -140],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        onUpdate={(latest) => {
          const angle = latest.rotate;
          const LEFT_LIMIT = -130;
          const RIGHT_LIMIT = 130;

          if (angle <= LEFT_LIMIT && lastDirection !== "left") {
            setLastDirection("left");
            setIndex((prev) => (prev + 1) % skillData.length);
          }

          if (angle >= RIGHT_LIMIT && lastDirection !== "right") {
            setLastDirection("right");
            setIndex((prev) => (prev + 1) % skillData.length);
          }
        }}
        style={{
          transformOrigin: "top center",
        }}
      >
        <div className="w-0.5 h-[100px] bg-blue-500" />

        <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-md">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src={skillData[index].image}
              alt={skillData[index].title}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
