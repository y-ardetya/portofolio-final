"use client";

import { useState } from "react";
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="h-10 flex lg:h-14">
        <ul className="flex text-white w-full mx-8 mt-8 justify-between">
          <li>
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
          </li>
          <li>
            <h1 className="navText text-2xl">井の中の蛙大海を知らず</h1>
          </li>
          <li>
            <h1
              className="pointer-events-auto text-white"
              onClick={() => setToggle(!toggle)}
            >
              Menu
            </h1>
          </li>
        </ul>
      </nav>
      <AnimatePresence mode="wait">
        {toggle && <Drawer toggle={toggle} setToggle={setToggle} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
