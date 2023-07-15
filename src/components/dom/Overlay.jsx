const Overlay = () => {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden absolute top-0 left-0">
        <nav className="h-10 flex border-double border-white border-b-4 lg:h-14">
          <ul className="flex text-white w-full mx-2 my-2 justify-between lg:mx-12 lg:my-4">
            <a>Logo</a>
            <h1>Yoga Ardli</h1>
            <p>Menu</p>
          </ul>
        </nav>
        {/* <section className="w-screen mt-[26rem] h-20 outline-red-400 z-20">
          <div className="mx-1 lg:mx-[2.8rem]">
            <h1 className="text-8xl">CREATIVE DEVELOPER</h1>
            <h1>hello</h1>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Overlay;
