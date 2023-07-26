"use client";

import React, { useState } from "react";
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="h-10 flex lg:h-14">
        <ul className="flex text-black w-full mx-8 mt-8 justify-between">
          <li>
            <img src="/logo.svg" alt="logo" className="h-6" />
          </li>
          <li>
            <h1 className="navText text-2xl">井の中の蛙大海を知らず</h1>
          </li>
          <li>
            <h1
              className="navText pointer-events-auto"
              onClick={() => setToggle(!toggle)}
            >
              Menu
            </h1>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {toggle && <Drawer toggle={toggle} setToggle={setToggle} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
