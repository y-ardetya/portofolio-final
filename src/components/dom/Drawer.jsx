import React from "react";
import { motion as m } from "framer-motion";

const Drawer = () => {
  const variants = {
    initial: {
      y: "-100%",
    },
    enter: {
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: 0.01,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  const curveVariants = {
    initial: {
      y: "-100%",
    },
    enter: {
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  // const initialPath = `M100 0 L${window.innerWidth} 400 Q${
  //   window.innerWidth / 2
  // } ${window.innerWidth} 0 0`;

  return (
    <>
      <m.nav
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="text-white absolute bg-black  flex z-10"
      >
        <ul className="flex justify-center items-center h-screen w-screen flex-row gap-x-10">
          <li>Projects</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </m.nav>
      {/* <m.div
        variants={curveVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="z-50 flex absolute top-0 left-0"
      >
        <svg className="h-screen w-screen fill-black stroke-none">
          <path d={initialPath}></path>
        </svg>
      </m.div> */}
    </>
  );
};

export default Drawer;
