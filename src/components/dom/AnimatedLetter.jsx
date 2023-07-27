import React from "react";
import { motion as m } from "framer-motion";

const AnimatedLetter = ({ text }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.075 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      x: 100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <m.div variants={container} initial="hidden" animate="visible" className="text-9xl">
      {letters.map((letter, index) => (
        <m.span variants={child} key={index}>
          {letter}
        </m.span>
      ))}
    </m.div>
  );
};

export default AnimatedLetter;
