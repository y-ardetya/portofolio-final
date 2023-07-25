import React, { useEffect, useState } from "react";
import Particles from "./Particles";
import Tes from "./Tes";
import { useStore } from "../store/Store";
import { AnimatePresence } from "framer-motion";

const Scene = () => {
  const [active, setActive] = useState(0);
  const index = useStore((state) => state.index);

  useEffect(() => {
    setActive(index);
  }, [index]);
  return (
    <>
      <AnimatePresence mode="wait">
        {active === 0 && <Particles />}
        {active === 1 && <Tes />}
      </AnimatePresence>
    </>
  );
};

export default Scene;
