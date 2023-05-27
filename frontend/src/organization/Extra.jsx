import React from "react";
import { useRecordWebcam } from "react-record-webcam";

import "./InterviewCam.css";
import MicroPhoneTesting from "./MicroPhoneTesting";

function Extra() {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const saveFile = async () => {
    alert("File Saved To server");
  };

  return (
    <div>
      {" "}
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Testing WebCam Section
      </h1>
      <br />
      {/* Web-Cam-Functioning SetUp*/}
      <div>
        <p className="font-bold">
          Camera status:
          <span className="bg-red-400 text-lg font-semibold p-1 border-2 border-black">
            {recordWebcam.status}
          </span>
        </p>
        <button
          onClick={recordWebcam.open}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Open camera
        </button>
        <button
          onClick={recordWebcam.start}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Start recording
        </button>
        <button
          onClick={recordWebcam.stop}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Stop recording
        </button>
        <button
          onClick={recordWebcam.retake}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Retake recording
        </button>
        <button
          onClick={recordWebcam.download}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Download recording
        </button>
        <button
          onClick={saveFile}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Save file to server
        </button>
        <video
          className="Candidate-Screen-WebCam"
          ref={recordWebcam.webcamRef}
          autoPlay
          muted
        />
        <video ref={recordWebcam.previewRef} autoPlay muted loop />
      </div>
      <br />
      <br />
      <br />
      {/* Microphone Testing SetUp */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Testing Microphone and Speech-Converter Section
      </h1>
      <br />
      <MicroPhoneTesting />
    </div>
  );
}

export default Extra;
