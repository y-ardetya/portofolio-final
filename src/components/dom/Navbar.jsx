import React from "react";

const Navbar = ({ setActive, active }) => {
  return (
    <nav className="h-10 flex border-double border-black border-b-4 lg:h-14 pointer-events-auto">
      <ul className="flex text-black w-full mx-2 my-2 justify-between lg:mx-12 lg:my-4">
        <a>Logo</a>
        <h1 className="navText">Yoga Ardli</h1>
        <p className="pointer-events-auto" onClick={() => setActive(!active)}>
          Menu
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
