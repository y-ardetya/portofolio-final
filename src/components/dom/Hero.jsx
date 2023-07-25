import { motion as m } from "framer-motion";
import { useStore } from "../store/Store";

const Hero = () => {
  const isHero = useStore((state) => state.isHero);

  return (
    <m.div
      animate={{ opacity: isHero ? 1 : 0 }}
      className="w-full h-full absolute flex justify-center items-center top-0 text-white flex-col"
    >
      <h1 className="heroText text-9xl">Me, Myself, and I</h1>
    </m.div>
  );
};

export default Hero;
