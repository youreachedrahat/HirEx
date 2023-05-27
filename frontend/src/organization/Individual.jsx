import React, { useState } from "react";
import { FaCheck, FaTimes, FaBuffer } from "react-icons/fa";

function Individual() {
  const [counter, setCounter] = useState([]);
  console.log("counter", counter);
  const uniqueIds = [];
  const [array, setArray] = useState([
    {
      name: "Hrushi Ambike",
      email: "hrushi@gmail.com",
      date: "25-11-2022",
      score: "High",
    },
    {
      name: "Rahat Sayad",
      email: "hrushi@gmail.com",
      date: "25-11-2022",
      score: "Low",
    },
    {
      name: "Faizan Shaikh",
      email: "hrushi@gmail.com",
      date: "25-11-2022",
      score: "Medium",
    },
    {
      name: "Akash  Malekr",
      email: "hrushi@gmail.com",
      date: "25-11-2022",
      score: "High",
    },
  ]);
  const deleteByValue = (value) => {
    setCounter((oldValues) => {
      return oldValues.filter((counter) => counter !== value);
    });
  };
  const counterr = counter.filter((element) => {
    const isDuplicate = uniqueIds.includes(element);

    if (!isDuplicate) {
      uniqueIds.push(element);

      return true;
    }

    return false;
  });
  const hndelApprove = (e) => {
    setCounter((counter) => [...counter, e]);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <div className="text-2xl font-bold pb-7">Candidates</div>
          <div>
            <div className="grid grid-cols-6 m-1  gap-5  p-2 bg-white rounded">
              <div className="flex justify-center items-center">Name</div>
              <div className="flex justify-center items-center">
                Email/Phone No
              </div>
              <div className="flex justify-center items-center">Date </div>
              <div className="flex justify-center items-center">Score</div>
              <div className="flex justify-center items-center">Action</div>
            </div>
            <div>
              {array?.map((item, index) => {
                return (
                  <>
                    <div className="grid grid-cols-6 m-1  gap-5 p-2 bg-white rounded">
                      <div className="flex justify-center items-center font-semibold">
                        {item.name}
                      </div>
                      <div className="flex justify-center items-center font-semibold">
                        {item.email}
                      </div>
                      <div className="flex justify-center items-center font-semibold">
                        {item.date}{" "}
                      </div>
                      <div className="flex justify-center font-semibold">
                        <div
                          className={
                            item.score === "High"
                              ? "bg-green-300 flex justify-center items-center rounded-full w-fit p-2 "
                              : item.score === "Low"
                              ? "bg-red-300 flex justify-center items-center rounded-full w-fit p-2 "
                              : item.score === "Medium"
                              ? "bg-yellow-300 flex justify-center items-center rounded-full w-fit p-2 "
                              : ""
                          }>
                          {item.score}
                        </div>
                      </div>
                      <div className="flex justify-center items-center ">
                        <button
                          type="button"
                          onClick={() => {
                            hndelApprove(index);
                          }}
                          className="hover:text-green-500 border-black border-2 rounded-md m-1  hover:p-1 p-0.5">
                          <FaCheck />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            deleteByValue(index);
                          }}
                          className="hover:text-red-500 border-black border-2 rounded-md  hover:p-1 p-0.5">
                          <FaTimes />
                        </button>
                      </div>
                      <button className="flex justify-center items-center">
                        <FaBuffer />
                        {counterr?.map((item) => {
                          return (
                            <div>
                              {item === index ? (
                                <div className="text-green-500 font-semibold">
                                  Approved
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Individual;
