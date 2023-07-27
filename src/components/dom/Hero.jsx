import { motion as m } from "framer-motion";

const getRandomColor = () => {
  const colors = ["#808080", "#808080", "#FFFFFF", "#001A33", "#001A33"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Hero = () => {
  const text = "Y. O . H . A . N . E";
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.075 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      x: 100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <m.div className="w-full h-full absolute flex justify-center items-center top-0 text-white flex-col">
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-9xl"
      >
        {letters.map((letter, index) => (
          <m.span
            className="pointer-events-auto cursor-pointer z-50 inline-block"
            whileHover={{ scale: 1.2, color: getRandomColor() }}
            transition={{ type: "spring", damping: 12, stiffness: 500 }}
            variants={child}
            key={index}
          >
            {letter}
          </m.span>
        ))}
      </m.div>
    </m.div>
  );
};

export default Hero;
