import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import axios from "axios";
import Cookies from "universal-cookie";

function InterviewList({ setItrId, UserDataData }) {

  // const setterF = (Obj) => {
  //   setSwitchD(false);
  // };


  const cards = [
    {
      organization: "Acme Inc.",
      jobPosition: "Software Engineer",
      interviewDate: "May 15, 2023",
      interviewTime: "10:00am",
    },
    {
      organization: "Widget Corp.",
      jobPosition: "Frontend Developer",
      interviewDate: "May 20, 2023",
      interviewTime: "2:00pm",
    },
  ];
  return (
    // <>
    //   {loading ? (
    //     <></>
    //   ) : (
        <>
          <div>
            <div className="flex justify-center">
              <div className="font-bold text-4xl font mt-4 ">
                 Interviews Battle
              </div>
            </div>
            <div>
              <CardList cards={cards} UserDataData={UserDataData} setItrId={setItrId}/>
            </div>
          </div>
          <hr />
          <hr />
          <hr />
          {/* <div>
            <div>
              <div className="flex justify-center">
                <div className="font-bold text-4xl font mt-4 ">
                  Previous Interviews
                </div>
              </div>
              <CardList cards={cards} UserDataData={UserDataData}/>
            </div>
          </div> */}
        </>
    //   )}
    // </>
  );
}

export default InterviewList;
