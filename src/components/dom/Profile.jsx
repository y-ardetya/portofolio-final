import { motion as m } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Profile = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut"}}
      className="w-full h-full z-[90] absolute top-0 left-0 flex text-black"
    >
      <div className="flex w-full h-full justify-center items-center text-start">
        <h1 className="w-screen h-96 profileText text-6xl -mt-28">
          <AnimatedText text={"Yoga Ardli Ardetya"} />
        </h1>
      </div>
    </m.div>
  );
};

export default Profile;
