import { motion as m } from "framer-motion";
import { useStore } from "../store/Store";


const Hero = () => {
  const isHero = useStore((state) => state.isHero);
  const index = useStore((state) => state.index);

  return (
    <m.div
      animate={{ opacity: isHero ? 1 : 0 }}
      className="w-full h-full absolute flex justify-center items-center top-0 text-white flex-col"
    >
      {isHero === true && index === 0 && (
        <m.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 1,
          }}
          className="heroText text-9xl"
        >
          Me, Myself, and I
        </m.h1>
      )}
      {isHero === true && index === 1 && (
        <m.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 1,
          }}
          className="heroText text-9xl"
        >
          Project
        </m.h1>
      )}
    </m.div>
  );
};

export default Hero;
