import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from "../organization/Footer";
import Header from "../organization/Header";
import Logo from "../images/Company-Logo.jpg";

function AboutUs({ setDisplay }) {
  return (
    <div className="">
      <Header setDisplay={setDisplay} />
      <div className="container ">
        <div className="flex flex-wrap justify-between items-center text-center">
          <div className="w-full md:w-1/2 lg:w-2/3 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-center pb-5">About Us</h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Recruiting the right candidate for a job role is a crucial and
              time-consuming task for any company. Interviews require a lot of
              time and resources, which can be saved by automating the
              pre-screening rounds. Our project proposes an AI-based recruitment
              system that can assess both hard and soft skills of the candidates
              using two algorithms - the personality insights algorithm and the
              answer relevancy algorithm. The personality insights algorithm
              helps to assess the OCEAN skills of the candidates, while the
              answer relevancy algorithm assesses the significance of answered
              questions by a candidate. We have implemented a website to
              simulate the recruitment process with these developed algorithms.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Apart from the recruitment process, our project also includes a
              chatbot functionality, replicating the features of Chat GPT, which
              can interact with the users and provide them with the required
              information. Additionally, we have developed a Resume Builder that
              can help students in making resumes with multiple templates to
              choose from. The application also includes features like
              personality prediction using ML, checking confidence and other
              traits using video and tone analysis, sending automatic mails to
              selected or rejected candidates in one click, fast recruitment in
              larger numbers, and generating concise insights and a summary of
              the candidate's profile. Our project aims to provide a handy
              application for HR/Recruiting Team to streamline their recruitment
              process, save time and resources, and select the best candidates
              for the job.
            </p>
            <div className="flex items-center">
              <FaTwitter className="text-gray-600 mr-4" />
              <FaFacebook className="text-gray-600 mr-4" />
              <FaInstagram className="text-gray-600" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img src={Logo} alt="Company Logo" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
