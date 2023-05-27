import React from "react";
import { FaHouseUser, FaSms, FaUserFriends, FaBars } from "react-icons/fa";

function Navbar(props) {
  const { setItr, Itr } = props;
  return (
    <>
      <div className="text-3xl bg-white p-3 h-96 nav text-gray-500">
        <FaBars className="hover:cursor-pointer" />
        <div className="text-3xl bg-white mt-48 text-gray-500">
          <FaHouseUser
            className="hover:cursor-pointer m-2 "
            onClick={() => {
              setItr(!Itr);
            }}
          />
        </div>
        <div className="text-3xl bg-white mt-10 text-gray-500">
          <FaUserFriends className="hover:cursor-pointer m-2 " />
        </div>
        <div className="text-3xl bg-white mt-10 text-gray-500">
          <FaSms className="hover:cursor-pointer m-2 " />
        </div>
      </div>
    </>
  );
}

export default Navbar;
