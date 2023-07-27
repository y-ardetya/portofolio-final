import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
const Overlay = () => {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden absolute top-0 left-0 pointer-events-none z-50">
        <Navbar />
        <Hero />
     
        {/* <Footer /> */}
        {/* <AnimatedText text={"Yoga Ardli Ardetya * Creative Developer"} /> */}
      </main>
    </>
  );
};
export default Overlay;
