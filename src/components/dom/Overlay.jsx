import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { useStore } from "@/components/store/Store";
import Profile from "./Profile";
import AnimatedText from "./AnimatedText";

const Overlay = () => {
  const isHero = useStore((state) => state.isHero);
  const index = useStore((state) => state.index);

  return (
    <>
      <main className="w-screen h-screen overflow-hidden absolute top-0 left-0 pointer-events-none z-10">
        <Navbar />
        <Hero />
        <Footer />
        {isHero === false && index === 0 && (
          <AnimatedText text={"Yoga Ardli Ardetya"} />
        )}
      </main>
    </>
  );
};
export default Overlay;
