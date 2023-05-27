import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-between items-center h-16 navbar ">
      <div className="flex justify-center items-center  ">
        <div className="font-bold text-white p-5 pr-3 flex justify-center text-3xl ">
          LOGO
        </div>
      </div>
      <div className="flex text-white font-semibold p-5  justify-center items-center ">
        <div className="p-1 border-r-2 pr-3 pl-3 border-gray-400 hover:cursor-pointer">
          Home
        </div>
        <div className="p-1 border-r-2 pr-3 pl-3 border-gray-400 hover:cursor-pointer">
          Process
        </div>
        <div className="p-1  pl-3 pr0- hover:cursor-pointer">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
