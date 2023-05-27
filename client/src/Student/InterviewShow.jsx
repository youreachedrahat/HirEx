// import BlobToVideo from "../TestingAssets/BlobHelpingFunction";
import React, { useState, useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import Webcam from "react-webcam"; // using this for clickng images
import TakeSnapFunction from "../organization/TakeSnap";
import base64ToHttps from "../organization/ImageConverter";
import axios from "axios";
import Cookies from "universal-cookie";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Result from "../Student/pages/Result";
import "./InterviewShow.css";
import InterviewDetails from "./components/InterviewDetails";
import { Button } from "@mui/material";

function InterviewShow({ ItrId, UserDataData }) {
  // rahat code for base64 on clicking next
  const [link, setLink] = useState();

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    setTimeout(async () => {
      const dataUri = webcamRef.current.getScreenshot();
      console.log(dataUri);
      // setDataUri(dataUri);
      var httpImage = await base64ToHttps(dataUri);
      if (httpImage) {
        console.log("-------------->", httpImage);
      }
    }, 10000); // 10 seconds delay
  }, [webcamRef]);

  // dend
  const [tempData, setTEmpData] = useState({});
  const [switchWindow, setSwitchWindow] = useState(true);
  const [camRefresh, setCamREfresh] = useState(false);
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const [startInterview, setStartInterview] = useState(false);
  const [finishInterview, setFinishedInterview] = useState(false);
  const [lastQsn, setLastQsn] = useState(false);
  const [firstQsn, setFirstQsn] = useState(false);
  const [time, setTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);
  const [camOpener, setCamOpen] = useState(false);
  const [submitRecord, setSubmitRecord] = useState(false);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [firstTime, setFirstTime] = useState("");
  //Interview Detials state
  const [interviewData, setInterviewData] = useState({});
  const [loading, setLoading] = useState(true);
  const [questionArray, setQuestionArray] = useState([]);
  //Result State
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  // console.log("nnn",recordWebcam.status);
  const [imageTrigger, setImageTrigger] = useState(false);
  const countIncrement = () => {
    let counter = parseInt(localStorage.getItem("Counter"));
    if (counter >= questionArray.length - 2) {
      setLastQsn(true);
    }
    if (counter > questionArray.length - 1) {
      setFinishedInterview(true);
      setSubmitRecord(true);
      localStorage.setItem("Counter", counter);
    } else {
      counter = counter + 1;
      localStorage.setItem("Counter", counter);
    }
  };
  const submitInterview = () => {
    countIncrement();
    SpeechRecognition.stopListening();
    setStartInterview(false);
    recordWebcam.stop();
    recordWebcam.download();
    setSubmitRecord(true);
  };

  const pushAnswerFunction = () => {
    const ArrayFromCookie = cookies.get("AnswerArray");
    const newSpreadedArray = [...ArrayFromCookie];
    // let newObj = {
    //   Question: questionArray[(parseInt(localStorage.getItem("Counter"))-1)],
    //   Answer: transcript,
    //   TimeOfQuestion:(formatTime(time)),
    // };
    if (transcript === "") {
      newSpreadedArray.push("none");
    } else {
      newSpreadedArray.push(transcript);
    }
    cookies.set("AnswerArray", newSpreadedArray, { maxAge: 43200 });
    console.log(cookies.get("AnswerArray"));
    console.log(parseInt(localStorage.getItem("Counter")));
  };
  const fetchInterview = async () => {
    const viewData = await axios
      .post(`${BASEURL}/ViewInterview`, {
        Res_Interview_ID: ItrId,
      })
      .then((Data) => {
        setInterviewData(Data.data.data1);
        setQuestionArray(Data.data.data1.Question_Arrays);
        setTime(Data.data.data1.Time_Duration * 60);
        setFirstTime(formatTime(time));
        if (questionArray) {
          setLoading(false);
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };
  useEffect(() => {
    setTEmpData(UserDataData);
    fetchInterview();
  }, [loading]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, camRefresh]);

  useEffect(() => {
    localStorage.setItem("Counter", -1);
    localStorage.setItem("AWSResult", JSON.stringify([]));
    cookies.set("AnswerArray", [], { maxAge: 43200 });
  }, []);

  useEffect(() => {
    recordWebcam.open();
  }, [camOpener]);

  const handleStart = () => {
    let counter = parseInt(localStorage.getItem("Counter"));
    counter = counter + 1;
    localStorage.setItem("Counter", counter);
    setStartInterview(true);
    setIsActive(true);
    resetTranscript();
    SpeechRecognition.startListening();
    recordWebcam.start();
    setFirstQsn(true);
  };

  function secondCounter(time) {
    const timeArr = time.split(":"); // Split the time string into an array
    const minutes = parseInt(timeArr[0]); // Parse the minutes as an integer
    const seconds = parseInt(timeArr[1]); // Parse the seconds as an integer
    const totalSeconds = minutes * 60 + seconds; // Calculate the total number of seconds
    return totalSeconds; // Return the total number of seconds
  }

  const handleStop = () => {
    setStartInterview(false);
    localStorage.setItem("Counter", -1);
    setIsActive(false);
    SpeechRecognition.stopListening();
    recordWebcam.stop();
    setCamOpen(!camOpener);
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
  const addNewResult = async () => {
    const ArrayFromCookieT = cookies.get("AnswerArray");
    const newSpreadedArrayT = [...ArrayFromCookieT];

    console.log("ooooo-->", tempData);
    const submitInterviewResult = await axios
      .post(`${BASEURL}/AddNewResult`, {
        Res_Candidate_Name: tempData.Name,
        Res_Candidate_Email: tempData.emailId,
        Res_Company_Name: interviewData.Company_Name,
        Res_HR_Name: interviewData.HR_Name,
        Res_Name_Technology: interviewData.Name_Technology,
        Res_Number_Of_Questions: interviewData.Number_Of_Questions,
        Res_Time_Duration: interviewData.Time_Duration,
        Res_Time_Of_Interview: interviewData.Time_Of_Interview,
        Res_Date_Of_Interview: interviewData.Date_Of_Interview,
        Res_Question_Arrays: interviewData.Question_Arrays,
        Res_Answer_Arrays: newSpreadedArrayT,
        Res_Performance_Array: [result1, result2],
        Res_Text_Percentage: result2,
        Res_Time_Percentage: result3,
        Res_confidence_Percentage: 0,
        Res_Overall_Percentage: ((result1 + result2) / 200) * 100,
      })
      .then((Data) => {
        if (Data.data.message === "Interview result added successfully !") {
          // alert("Result submitted to Company !");
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };

  const handleAPIRecording = async () => {
    const ArrayFromCookie = cookies.get("AnswerArray");
    const newSpreadedArray = [...ArrayFromCookie];

    const submitInterviewData = await axios
      .post(`${BASEURL}/CalculateResult`, {
        Res_Interview_ID: 456456,
        Res_Answer_Array: newSpreadedArray,
        Res_Interview_Timing:
          secondCounter(firstTime) - secondCounter(formatTime(time)),
      })
      .then((Data) => {
        console.log("...", Data.data);
        setResult1(Data.data.answerPercentageList);
        setResult2(Data.data.overAllPercentage);
        setResult3(Data.data.timeResult);
        if (Data.data.message === "Result found successfully !") {
          setSwitchWindow(false);
          setIsActive(false);
          addNewResult();
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const checkTime = (time) => {
    console.log(time);
    if (time === 0) {
      handleAPIRecording();
    }
  };

  return (
    <>
      <div className="mb-5">
        {checkTime(time)}
        <InterviewDetails interviewData={interviewData} />
      </div>
      {switchWindow ? (
        <div className="flex md:flex-row h-screen p-9 justify-around w-full  ">
          <div className="bg-gray-200 w-3/5 h-100 md:h-auto flex items-center justify-center">
            <div className="w-full">
              {/* <TakeSnapFunction
                imageTrigger={imageTrigger}
                setImageTrigger={setImageTrigger}
              /> */}
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
            </div>
          </div>

          <div className="bg-white  h-screen w-1/4 md:h-auto  p-9 relative">
            {firstQsn ? (
              <div className="h-20 font-bold text-3xl border-b-2 border-gray-500 text-gray-500 flex flex-row justify-around pb-4  ">
                <span>Questions : </span>
                {localStorage.getItem("Counter")} / {questionArray.length}
                {/* {1 / 5} */}
              </div>
            ) : (
              <></>
            )}

            <div className="font-bold text-3xl ">
              {/* {submitRecord ? (
                <Button variant="contained" color="sucess">
                  End of the interview!
                </Button>
              ) : ( */}
              {/* // <div className="">End of the interview!</div> */}
              <div>
                {" "}
                {questionArray[parseInt(localStorage.getItem("Counter"))]}
              </div>
              {/* )} */}

              {/* What makes you good fit for this position? */}
            </div>
            {submitRecord ? (
              <></>
            ) : (
              <div className="w-full text-left ">
                <div className="p-1 border-t-2 border-gray-500 mt-10">
                  <h2 className="font-bold text-lg mb-5">
                    Your transcript text:
                  </h2>
                  <p className="border-2 border-black p-5 font-semibold text-xl text-blue-500">
                    {transcript}
                  </p>
                </div>
              </div>
            )}
            {/* bottom part below */}
            {/* bottom part  */}
            {/* bottom part  */}
            <div className="absolute bottom-8  ">
              {submitRecord ? (
                <></>
              ) : (
                <div className="w-10/12 mb-2 ">
                  {isActive && (
                    <Button
                      variant="contained"
                      color="error"
                      className="w-full"
                      onClick={() => {
                        // recordWebcam.download();
                        // setIsActive(false);
                      }}
                    >
                      Video is being monitered - Answer carefully !
                    </Button>
                  )}
                </div>
              )}

              {/* Timer below  */}
              {/* Timer below  */}
              {/* Timer below  */}
              <div className="text-2xl flex justify-between w-4/5 border-b-2 border-gray-500 pb-2">
                <span className="text-gray-500"></span>Time Remaining -
                <p className=" font-bold border-2 border-black p-0.5">
                  {formatTime(time)}
                </p>
              </div>

              {/* Buttons below */}
              {/* Buttons below */}
              {/* Buttons below */}
              <div className="w-full">
                <div className="flex flex-col items-between w-4/5">
                  {submitRecord ? (
                    <div className="flex justify-between mt-4 ">
                      <Button
                        variant="contained"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={() => recordWebcam.download()}
                      >
                        Download
                      </Button>
                      <Button
                        variant="contained"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={() => handleAPIRecording()}
                      >
                        Submit
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className=" mt-8 ">
                        {finishInterview ? (
                          <>dfjivdivbdihvbhdu h</>
                        ) : (
                          <>
                            {!isActive && (
                              <Button
                                variant="contained"
                                className="w-full"
                                onClick={() => {
                                  handleStart();
                                  setImageTrigger(!imageTrigger);
                                  capture();
                                  console.log(
                                    "when start",
                                    parseInt(localStorage.getItem("Counter"))
                                  );
                                }}
                              >
                                Start
                              </Button>
                            )}
                          </>
                        )}
                      </div>

                      {startInterview ? (
                        <>
                          {" "}
                          <div className=" flex justify-between w-full">
                            {lastQsn ? (
                              <></>
                            ) : (
                              <>
                                <Button
                                  variant="contained"
                                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                                  onClick={() => {
                                    countIncrement();
                                    setImageTrigger(!imageTrigger);
                                    resetTranscript();
                                    if (!listening) {
                                      SpeechRecognition.startListening();
                                    }
                                    pushAnswerFunction();
                                    capture();
                                  }}
                                >
                                  Next Question
                                </Button>
                              </>
                            )}

                            <Button
                              variant="contained"
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => {
                                submitInterview();
                                pushAnswerFunction();
                                resetTranscript();
                              }}
                            >
                              Finish
                            </Button>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </div>

                {/* Right side interview section ends*/}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Result
          resultlist={result1}
          overallpercent={result2}
          timeresult={result3}
          tempData={tempData}
          questionArray={questionArray}
        />
      )}
    </>
  );
}

export default InterviewShow;
