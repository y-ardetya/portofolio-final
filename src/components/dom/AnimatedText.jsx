import React from "react";
import { motion as m } from "framer-motion";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
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
    
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
  
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full h-full z-[90] absolute top-0 left-0 flex text-black">
      <div className="flex w-full h-full justify-center items-center text-start">
        <m.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-screen h-96 overflow-hidden flex profileText text-7xl -mt-28 mx-10"
        >
          {words.map((word, index) => (
            <m.span variants={child} className="mr-5 text-black" key={index}>
              {word}
            </m.span>
          ))}
        </m.div>
      </div>
    </div>
  );
};

export default AnimatedText;
