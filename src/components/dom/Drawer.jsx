import { useRef } from "react";
import { motion as m } from "framer-motion";

const Drawer = () => {
  const blob = useRef();
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

  return (
    <>
      <m.nav
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="text-white absolute  flex z-10"
      >
        <ul className="flex justify-center items-center h-screen w-screen flex-row gap-x-10">
          <li>Projects</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </m.nav>

      <div>
        <m.svg
          className="w-[100%] h-screen pointer-events-none"
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            ref={blob}
            initial={{
              d: "M395.102 2C167.543 2 19.5048 1.33625 1 1H1911.99C1913.59 1.73091 1652.26 1.97121 1521.39 2C1258.82 1.99708 665.986 2 395.102 2Z",
            }}
            animate={{
              d: "M396.958 1081C168.327 1081 19.5919 364.154 1 1H1920.99C1922.6 790.387 1660.04 1049.91 1528.55 1081C1264.75 1077.85 669.118 1081 396.958 1081Z",
            }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
            exit={{
              d: "M395.102 2C167.543 2 19.5048 1.33625 1 1H1911.99C1913.59 1.73091 1652.26 1.97121 1521.39 2C1258.82 1.99708 665.986 2 395.102 2Z",
              duration: 0.6,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
           
            d="M1 1079.5V0.5H1921.5V1079.5H1Z"
            fill="black"
            stroke="black"
          />
        </m.svg>
      </div>
    </>
  );
};

export default Drawer;
