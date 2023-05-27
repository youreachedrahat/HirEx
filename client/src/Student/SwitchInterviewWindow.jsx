import InterviewShow from "./InterviewShow";
import React, { useState } from "react";

const SwitchInterviewWindow = ({ UserDataData ,ItrId,setItrId}) => {
  //Swithcing
  return (
    <>
      <InterviewShow
        setItrId={setItrId}
        UserDataData={UserDataData}
        ItrId={ItrId}
      />
    </>
  );
};
export default SwitchInterviewWindow;
