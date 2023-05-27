import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFileAlt,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Header from "../organization/Header";
import Footer from "../organization/Footer";

function LandingPg({ setDisplay }) {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen marginLeftZero">
      <Header setDisplay={setDisplay} />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Your One-Stop Solution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mt-4 text-lg text-gray-500"
            >
              We offer a range of services to help you land your dream job,
              including a chatbot to answer your questions, a resume builder to
              create a professional resume, and an interview generation tool to
              help you prepare for your interview.
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="flex justify-evenly items-center">
              <Link to="/chat">
                <button>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-48 h-48 bg-blue-500 rounded-full flex justify-center items-center shadow-lg mr-8 hover:bg-blue-600"
                  >
                    <FontAwesomeIcon
                      icon={faComments}
                      className="text-white text-4xl"
                    />
                  </motion.div>
                </button>
              </Link>
              <Link to="/resume">
                <button>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-48 h-48 bg-green-500 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-white text-4xl"
                    />
                  </motion.div>
                </button>
              </Link>
              <Link to="/user">
                <button>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-48 h-48 bg-yellow-500 rounded-full flex justify-center items-center shadow-lg ml-8 hover:bg-yellow-600"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="text-white text-4xl"
                    />
                  </motion.div>
                </button>
              </Link>
            </div>
            <div className="flex justify-evenly items-center mt-8">
              <button
                onClick={() => {
                  setDisplay("chatbot");
                }}
                to="/chatbot"
                className="text-blue-500 font-semibold hover:text-blue-700"
              >
                Chatbot
              </button>
              <button
                onClick={() => {
                  setDisplay("resumebuilder");
                }}
                to="/resume-builder"
                className="text-green-500 font-semibold ml-8 hover:text-green-700"
              >
                Resume Builder
              </button>
              <button
                to="/interview-generator"
                className="text-yellow-500 font-semibold ml-8 hover:text-yellow-700"
              >
                Interview Generator
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPg;
