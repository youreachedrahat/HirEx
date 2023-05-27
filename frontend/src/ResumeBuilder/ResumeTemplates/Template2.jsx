import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

function Template2(props) {
  const { basicinfo, workinfo, eduinfo, setResume, picture } = props;

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleBack = () => {
    setResume(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="">
        <div
          className="max-w-3xl mx-auto py-12 p-5 border-2 border-black  "
          ref={componentRef}
        >
          <div className="flex items-center justify-between">
            <img
              className="h-16 w-16 rounded-full mr-4"
              src={picture}
              alt={basicinfo.name}
            />
            <div className="flex-grow text-right">
              <div className="text-4xl font-bold leading-none">
                {basicinfo.name}
              </div>
              <div className="text-lg">{basicinfo.designation}</div>
              <div className="text-lg">{basicinfo.email}</div>
              <div className="text-lg">{basicinfo.phone}</div>
              <div className="text-lg flex items-center justify-end">
                <a
                  href={basicinfo.git}
                  className="mr-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href={basicinfo.lin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Summary
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  {basicinfo.objective}
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {basicinfo.location}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Education
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {eduinfo.education.map((item) => {
                        return (
                          <div key={item.name}>
                            <div className="font-medium">{item.name}</div>
                            <div>{item.collage}</div>
                            <div>
                              {item.start} - {item.end} ({item.percentage}%)
                            </div>
                          </div>
                        );
                      })}
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Work Experience
                  </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    {workinfo.work.map((item) => {
                      return (
                        <div
                          key={item.title}
                          className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        >
                          <dt className="text-sm font-medium text-gray-500">
                            {item.title}
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div className="font-medium">{item.company}</div>
                            <div>{item.duration}</div>
                            <div>{item.description}</div>
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Skills
                  </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <div className="flex flex-wrap">
                    {basicinfo.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gray-200 px-2 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-8">
              <div className="flex">
                <div className="flex items-center">
                  <a
                    href={`mailto:${basicinfo.email}`}
                    className="text-gray-700 hover:text-gray-900 mr-3"
                  >
                    <FaEnvelope className="mr-1" />
                  </a>
                  <a
                    href={`tel:${basicinfo.phone}`}
                    className="text-gray-700 hover:text-gray-900 mr-3"
                  >
                    <FaPhone className="mr-1" />
                  </a>
                  <a
                    href={basicinfo.git}
                    className="text-gray-700 hover:text-gray-900 mr-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1" />
                  </a>
                  <a
                    href={basicinfo.lin}
                    className="text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-96 p-5 justify-between mx-auto">
          <button
            className="bg-gray-700 hover:bg-gray-600 w-32 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleBack}
          >
            Edit
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 w-32 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            onClick={handlePrint}
          >
            <FaPrint className="mr-1" /> Print
          </button>
        </div>
      </div>
    </div>
  );
}
export default Template2;
