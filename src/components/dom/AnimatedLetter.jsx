import React from "react";
import { motion as m } from "framer-motion";

const AnimatedLetter = ({ text }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <m.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full h-full absolute flex justify-center items-center top-0 text-white flex-col heroText text-9xl"
    >
      {letters.map((letter, index) => (
        <m.span variants={child} className="w-screen h-screen" key={index}>
          {letter}
        </m.span>
      ))}
    </m.div>
  );
};

export default AnimatedLetter;
