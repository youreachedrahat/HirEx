import React from "react";
import Individual from "../organization/Individual";
import Searchbar from "../organization/Searchbar";
import Tracker from "../organization/Tracker";

function Candidate() {
  return (
    <div className="candi">
      <div>
        <div className="p-10 ">
          <Searchbar />
        </div>
        <div className="  flex p-20  rounded-xl   ">
          <Individual />
          <Tracker />
        </div>
      </div>
    </div>
  );
}

export default Candidate;
