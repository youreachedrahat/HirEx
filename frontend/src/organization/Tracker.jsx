import React from "react";
import { FaEllipsisV, FaUserFriends } from "react-icons/fa";

function Tracker() {
  return (
    <div className="flex justify-center items-center ml-10">
      <div>
        <div className=" p-3 m-1 flex bg-white rounded-lg">
          <div className=" bg-blue-300 text-blue-500 rounded-full h-fit p-1">
            {" "}
            <FaUserFriends className="text-4xl" />
          </div>
          <div className="p-0.5">
            <div className="font-bold text-2xl">00</div>
            <div className="text-xs">Total pending candidates</div>
          </div>
          <div className="flex justify-center items-center">
            <FaEllipsisV className="hover:cursor-pointer" />
          </div>
        </div>
        <div className=" p-3 m-1 flex bg-white rounded-lg">
          <div className=" bg-red-300 text-red-500 rounded-full h-fit p-1">
            {" "}
            <FaUserFriends className="text-4xl" />
          </div>
          <div className="p-0.5">
            <div className="font-bold text-2xl">01</div>
            <div className="text-xs">Total rejected candidates</div>
          </div>
          <div className="flex justify-center items-center">
            <FaEllipsisV className="hover:cursor-pointer" />
          </div>
        </div>
        <div className=" p-3 m-1 flex bg-white rounded-lg">
          <div className=" bg-green-300 text-green-500 rounded-full h-fit p-1">
            {" "}
            <FaUserFriends className="text-4xl" />
          </div>
          <div className="p-0.5">
            <div className="font-bold text-2xl">03</div>
            <div className="text-xs">Total Approved candidates</div>
          </div>
          <div className="flex justify-center items-center">
            <FaEllipsisV className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
