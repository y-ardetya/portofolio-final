import { motion as m } from "framer-motion";
import Image from "next/image";

const Drawer = ({ toggle, setToggle }) => {
  const variants = {
    initialState: {
      clipPath: "circle(0% at 50% 0%)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    animateState: {
      clipPath: "circle(100% at 50% 20%)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
    exitState: {
      clipPath: "circle(0% at 50% 0%)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };
  return (
    <m.main
      key={toggle}
      variants={variants}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      className="w-screen h-screen absolute top-0 left-0 bg-white z-[100] pointer-events-auto"
    >
      <div className="flex flex-col justify-start text-9xl mx-10 mt-10 text-black">
        <h1>CONTACT</h1>
        <h1>ABOUT</h1>
        <h1>PROJECTS</h1>
      </div>
      <Image
        priority
        onClick={() => setToggle(!toggle)}
        src="/arrow.svg"
        alt="logo"
        width={32}
        height={32}
        className="w-20 h-20 mx-10 mt-48 fill-white cursor-pointer"
      />
    </m.main>
  );
};

export default Drawer;
