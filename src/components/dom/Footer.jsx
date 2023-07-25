import React from "react";
import { useStore } from "../store/Store";
import { motion as m } from "framer-motion";

const Footer = () => {
  const isHero = useStore((state) => state.isHero);
  const plusIndex = useStore((state) => state.plusIndex);
  const minusIndex = useStore((state) => state.minusIndex);

  return (
    <m.div
      className="h-full w-full mt-[80vh]"
      animate={{ opacity: isHero ? 1 : 0 }}
    >
      <div className="flex justify-center items-center">
        <div className="w-[60rem] h-16  flex items-center justify-center">
          <div
            onClick={() => minusIndex()}
            className="bg-black w-8 h-8 rounded-full flex justify-center items-center pointer-events-auto"
          />
          <div className="bg-black w-96 h-1" />
          <div className="bg-black w-6 h-6 rounded-full" />
          <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
            <h1 className="text-white">0</h1>
          </div>
          <div className="bg-black w-6 h-6 rounded-full" />
          <div className="bg-black w-96 h-1" />
          <div
            onClick={() => plusIndex()}
            className="bg-black w-8 h-8 rounded-full flex justify-center items-center pointer-events-auto"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Footer;
