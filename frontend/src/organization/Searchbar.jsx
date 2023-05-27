import React from "react";
import { FaSearch, FaArrowDown } from "react-icons/fa";

import { useState } from "react";
function Searchbar() {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-between">
      <div className="flex bg-white rounded-xl w-fit ">
        <div className="flex justify-center items-center rounded-xl bg-white pl-2 ">
          <FaSearch />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 w-60 border-r-2 border-black"
          placeholder="Enter the candidate to search "
        />
        <div className="flex justify-center items-center bg-white p-2 rounded-xl ">
          <FaArrowDown className="hover:cursor-pointer" />
          <span className="pl-3"> Approved Candidate</span>{" "}
        </div>
      </div>
      <div className="font-bold text-2xl">HirEX</div>
    </div>
  );
}

export default Searchbar;
