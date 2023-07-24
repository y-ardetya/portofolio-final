import { motion as m } from "framer-motion";

const Drawer = ({ toggle, setToggle }) => {
  return (
    <m.main
      key={toggle}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-screen h-screen absolute top-0 left-0 bg-white z-[100] pointer-events-auto"
    >
      <div className="flex flex-col justify-start text-9xl mx-10 mt-10">
        <h1>// CONTACT</h1>
        <h1>// ABOUT</h1>
        <h1>// PROJECTS</h1>
      </div>
      <button onClick={() => setToggle(!toggle)}>Back</button>
    </m.main>
  );
};

export default Drawer;
