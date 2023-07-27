import React, { useEffect, useState } from "react";
import Particles from "./Particles";
import { useStore } from "../store/Store";
import { AnimatePresence } from "framer-motion";
import Carousel from "./Carousel";

const Scene = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <Particles />
      </AnimatePresence>
    </>
  );
};

export default Scene;
