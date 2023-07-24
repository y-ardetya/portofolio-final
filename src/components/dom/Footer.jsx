import React from "react";

const Footer = () => {
  return (
    <div className="h-full w-full mt-[80vh]">
      <div className="flex justify-center items-center">
        <div className="w-[60rem] h-16  flex items-center justify-center">
          <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center">
            {/* <h1 className="text-white">{"<"}</h1> */}
          </div>
          <div className="bg-black w-96 h-1" />
          <div className="bg-black w-6 h-6 rounded-full" />
          <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
            <h1 className="text-white">0</h1>
          </div>
          <div className="bg-black w-6 h-6 rounded-full" />
          <div className="bg-black w-96 h-1" />
          <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center">
            {/* <h1 className="text-white">{">"}</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
