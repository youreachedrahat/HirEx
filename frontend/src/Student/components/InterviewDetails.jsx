import React from "react";
import DateConverter from "../../assets/DateConverter";


function InterviewDetails({ interviewData }) {
  return (
    <div className="mt-5">
      <div className="flex justify-center">
        <h3 className="text-gray-800 text-4xl font-bold mb-4 ">
          Interview Details
        </h3>
      </div>
      <div className="text-gray-800 grid grid-cols-2 gap-4">
        <div>
          <span className="font-bold">Company Name:</span>{" "}
          {interviewData.Company_Name}
        </div>
        <div>
          <span className="font-bold">HR Name:</span> {interviewData.HR_Name}
        </div>
        <div>
          <span className="font-bold">Date:</span>{" "}
         { DateConverter(interviewData.Date_Of_Interview,"Date")}
        </div>
        <div>
          <span className="font-bold">Name of Technology:</span>{" "}
          {interviewData.Name_Technology}
        </div>
        <div>
          <span className="font-bold">Time Duration:</span>{" "}
          {interviewData.Time_Duration} Minutes 
        </div>
        <div>
          <span className="font-bold">Number of Questions:</span>{" "}
          {interviewData.Number_Of_Questions}
        </div>
        <div>
          <span className="font-bold">Description:</span>{" "}
          {interviewData.Description}
        </div>
        <div>
          <span className="font-bold">Interview ID:</span>{" "}
          {interviewData.Interview_ID}
        </div>
      </div>
      <div className="text-red-500">
        <marquee>Instructions: {interviewData.Instruction}</marquee>
      </div>
    </div>
  );
}

export default InterviewDetails;
