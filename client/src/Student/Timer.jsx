import React, { useState, useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";


const Timer = ({switchWindow, setSwitchWindow,camRefresh}) => {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const [startInterview, setStartInterview] = useState(false);
  const [finishInterview, setFinishedInterview] = useState(false);
  const [time, setTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);

  // console.log("nnn",recordWebcam.status);
  const questionArray = [
    "Lets Rock !!!!!!",
    "What is reactJs ?",
    "What is  ECMAScript6 ?  ",
    "How DOM works? ",
  ];
  let [counter, setCounter] = useState(-1);
  const countIncrement = () => {
    if (counter >= questionArray.length) {
      setFinishedInterview(true);
      setCounter(counter);
    } else {
      setCounter(counter++);
    }
  };

  const submitInterview =()=>{
    setStartInterview(false);
    handleReset();
    setSwitchWindow(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive,camRefresh]);

  const handleStart = () => {
    setCounter(counter++);
    setStartInterview(true);
    setIsActive(true);
  };

  const handleStop = () => {
    setStartInterview(false);
    setCounter(-1);
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(20 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative h-screen flex justify-center items-center ">
      <div className="absolute top-0 right-0 border-2 border-black p-5">
        <p className="text-3xl font-bold">{formatTime(time)}</p>
      </div>
      <div className=" flex flex-col items-center w-4/5">
        <div className="w-full mt-8 border-2 border-black p-5">
          <p className="text-2xl mb-4">Interview Question:</p>
          <p className="text-lg mb-4">{questionArray[counter]}</p>
        </div>

        <div className="w-full mt-8 flex">{
                  finishInterview ? (<></>) : (<>        <div className="w-full mt-8 flex">
                  {!isActive && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                      onClick={() => {
                        handleStart();
                      }}
                    >
                      Start
                    </button>
                  )}
                  {isActive && (
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                      onClick={handleStop}
                    >
                      Stop
                    </button>
                  )}
                </div></>)
                }
          {startInterview ? (
            <>
              {" "}
              <div className="w-1/2 flex ">{
                  finishInterview ? (<></>) : (<><button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={() => {
                      countIncrement();
                      console.log(counter);
                    }}
                  >
                    Next Question
                  </button></>)
                }
                
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>{submitInterview()}}
                >
                  Finish
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
