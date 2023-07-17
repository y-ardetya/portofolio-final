import { useState } from "react";
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Overlay = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <main className="w-screen h-screen overflow-hidden absolute top-0 left-0 pointer-events-none z-10">
        <Navbar active={active} setActive={setActive} />
        <div className="flex justify-between my-2">
          <section className="">
            <h1 className="heroText mx-5 text-9xl">Welcome To My</h1>
          </section>
          <section className="my-8">
            <h1 className="leftText text-7xl text-white"><span className="text-black">_Cr</span>eative Developer</h1>
          </section>
        </div>

        <AnimatePresence mode="wait">{active && <Drawer />}</AnimatePresence>
      </main>
    </>
  );
};

export default Overlay;
