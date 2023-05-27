import React from "react";
import { useRecordWebcam } from "react-record-webcam";

import MicroPhoneTesting from "./MicroPhoneTesting";

function Extra({switchWindow, setSwitchWindowcam, Refresh, setCamREfresh}) {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mt-12 mb-6">
        Webcam Section
      </h1>
      {/* Webcam Functioning Setup*/}
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg font-bold">
          Camera status:{" "}
          <span className="inline-block bg-red-400 text-white rounded-md py-1 px-3">
            {recordWebcam.status}
          </span>
        </p>
        <div className="flex justify-between w-1/2">
          <button
            onClick={()=>{recordWebcam.open();setCamREfresh(!Refresh)}}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
          >
            Open camera
          </button>
          <button
            onClick={recordWebcam.start}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
          >
            Start recording
          </button>
        </div>
        <video
          className="Candidate-Screen-WebCam w-full max-w-md"
          ref={recordWebcam.webcamRef}
          autoPlay
          muted
        />
        <div className="hidden">
          <video
            ref={recordWebcam.previewRef}
            autoPlay
            muted
            loop
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Microphone Testing Setup*/}
      <MicroPhoneTesting />
    </div>
  );
}

export default Extra;
