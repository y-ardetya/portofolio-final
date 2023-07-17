import { useState } from "react";
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";

const Overlay = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <main className="w-screen h-screen overflow-hidden absolute top-0 left-0">
        <nav className="h-10 flex border-double border-black border-b-4 lg:h-14">
          <ul className="flex text-black w-full mx-2 my-2 justify-between lg:mx-12 lg:my-4">
            <a>Logo</a>
            <h1>Yoga Ardli</h1>
            <p onClick={() => setActive(!active)}>Menu</p>
          </ul>
        </nav>
        <AnimatePresence mode="wait">{active && <Drawer />}</AnimatePresence>
      </main>
    </>
  );
};

export default Overlay;
