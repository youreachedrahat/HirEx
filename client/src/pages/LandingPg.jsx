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
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header setDisplay={setDisplay} />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* Rest of the code */}
          </div>

          <div className="mt-10">
            <div className="flex justify-evenly items-start flex-wrap">
              <Link to="/chat">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-48 h-48 bg-blue-500 rounded-full flex justify-center items-center shadow-lg mb-4 hover:bg-blue-600"
                  >
                    <FontAwesomeIcon
                      icon={faComments}
                      className="text-white text-4xl"
                    />
                  </motion.div>
                  <button
                    onClick={() => {
                      setDisplay("chatbot");
                    }}
                    to="/chatbot"
                    className="text-blue-500 font-semibold hover:text-blue-700"
                  >
                    Chatbot
                  </button>
                </div>
              </Link>
              
              <Link to="/resume">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-48 h-48 bg-green-500 rounded-full flex justify-center items-center shadow-lg mb-4 hover:bg-green-600"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-white text-4xl"
                    />
                  </motion.div>
                  <button
                    onClick={() => {
                      setDisplay("resumebuilder");
                    }}
                    to="/resume-builder"
                    className="text-green-500 font-semibold hover:text-green-700"
                  >
                    Resume Builder
                  </button>
                </div>
              </Link>
              
              <Link to="/user">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="w-48 h-48 bg-yellow-500 rounded-full flex justify-center items-center shadow-lg mb-4 hover:bg-yellow-600"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="text-white text-4xl"
                    />
                  </motion.div>
                  <button
                    to="/interview-generator"
                    className="text-yellow-500 font-semibold hover:text-yellow-700"
                  >
                    Interview Generator
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPg;
