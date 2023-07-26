import { motion as m } from "framer-motion";
import Image from "next/image";

const Drawer = ({ toggle, setToggle }) => {
  return (
    <m.main
      key={toggle}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="w-screen h-screen absolute top-0 left-0 bg-black z-[100] pointer-events-auto"
    >
      <div className="flex flex-col justify-start text-9xl mx-10 mt-10 text-white">
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
