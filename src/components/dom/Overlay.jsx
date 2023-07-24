import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Overlay = () => {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden absolute top-0 left-0 pointer-events-none z-10">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </>
  );
};
export default Overlay;
