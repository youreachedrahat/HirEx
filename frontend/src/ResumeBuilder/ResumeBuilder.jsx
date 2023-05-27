import React from "react";
import { useState } from "react";
import Home from "./stepper/Home";
import { FaBuffer } from "react-icons/fa";
import Templates from "./pages/Templates";
import Template1 from "./ResumeTemplates/Template1";
import Template2 from "./ResumeTemplates/Template2";
import Header from "../organization/Header";
import Footer from "../organization/Footer";

function ResumeBuilder({ setDisplay }) {
  const [basicinfo, setBasicInfo] = useState({
    title: "Basic Information",
    name: "Hrushikesh Ambike",
    designation: "FullStack Developer",
    objective: "To join an organization where I can utilize my knowledge",
    email: "Hrushikesh.ambike@gmail.com",
    phone: "9359402672",
    image: "",
    file: null,
    skills: ["C++", "React Js", "Node Js", "Python", "TailWind Css", "Git"],

    git: "https://github.com/Hrushi01",
    lin: "https://github.com/Hrushi01",
  });
  const [workinfo, setWorkInfo] = useState({
    title: "Work Experience",
    skip: "",
    work: [
      {
        position: "React Js Developer",
        company: "Trakiot Solution pvt Limited",
        certificate: "https://github.com/Hrushi01",
        location: "Pune ",
        start: "",
        end: "",
        description: "InternShip in React Js",
      },
    ],
  });

  const [eduinfo, setEduInfo] = useState({
    title: "Education",
    education: [
      {
        name: "B.E.",
        collage: "Keystone School of Engineering",
        percentage: "80%",
        start: "",
        end: "",
      },
    ],
  });

  // const [basicinfo, setBasicInfo] = useState({
  //   title: "Basic Information",
  //   name: "",
  //   designation: "",
  //   objective: "",
  //   email: "",
  //   phone: "",
  //   image: "",
  //   file: null,

  //   git: "",
  //   lin: "",
  // });
  // const [workinfo, setWorkInfo] = useState({
  //   title: "Work Experience",
  //   skip: "",
  //   work: [
  //     {
  //       position: "",
  //       company: "",
  //       certificate: "",
  //       location: "",
  //       start: "",
  //       end: "",
  //       description: "",
  //     },
  //   ],
  // });

  // const [eduinfo, setEduInfo] = useState({
  //   title: "Education",
  //   education: [
  //     {
  //       name: "",
  //       collage: "",
  //       percentage: "",
  //       start: "",
  //       end: "",
  //     },
  //   ],
  // });

  const [resume, setResume] = useState(false);
  const [picture, setpicture] = useState(false);
  const [TemNo, setTemNo] = useState(0);

  return (
    <div className="bg-white shadow-lg rounded-lg  marginLeftZero">
      <Header setDisplay={setDisplay} />
      <div className="flex justify-around items-center mb-6 ">
        <div className="text-blue-600 flex items-center p-2">
          <FaBuffer className="text-4xl mr-3" />
          <h1 className="text-2xl font-bold">Resume Builder By Smart Hire</h1>
        </div>

        <div className="text-blue-500 italic text-xl pr-10">
          Create and Download your Resume for Free Now!
        </div>
      </div>

      <div className="bg-indigo-50 h-screen overflow-scroll overflow-x-hidden">
        {resume ? (
          <div>
            <div className="text-center font-serif text-2xl mb-10">
              Your Resume Has Been Generated
            </div>

            {TemNo === 0 ? (
              <Templates setTemNo={setTemNo} />
            ) : TemNo === 1 ? (
              <Template1
                basicinfo={basicinfo}
                eduinfo={eduinfo}
                workinfo={workinfo}
                setResume={setResume}
                picture={picture}
                setpicture={setpicture}
              />
            ) : TemNo === 2 ? (
              <Template2
                basicinfo={basicinfo}
                eduinfo={eduinfo}
                workinfo={workinfo}
                setResume={setResume}
                picture={picture}
                setpicture={setpicture}
              />
            ) : TemNo === 3 ? (
              <Template1
                basicinfo={basicinfo}
                eduinfo={eduinfo}
                workinfo={workinfo}
                setResume={setResume}
                picture={picture}
                setpicture={setpicture}
              />
            ) : TemNo === 4 ? (
              <Template2
                basicinfo={basicinfo}
                eduinfo={eduinfo}
                workinfo={workinfo}
                setResume={setResume}
                picture={picture}
                setpicture={setpicture}
              />
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Home
            basicinfo={basicinfo}
            workinfo={workinfo}
            eduinfo={eduinfo}
            setWorkInfo={setWorkInfo}
            setBasicInfo={setBasicInfo}
            setEduInfo={setEduInfo}
            setResume={setResume}
            picture={picture}
            setpicture={setpicture}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ResumeBuilder;
