import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// import Avatar from "react-avatar";
// import Avatar from "./Avatar";
import { Button } from "@mui/material";
const OrganizationProfile = ({ UserDataData }) => {
  const [OrgData, setOrgData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setOrgData(UserDataData);
    console.log("Org", OrgData);
    if (OrgData) {
      setLoading(false);
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          <div className="bg-gray-100">
            <div className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex items-center">
                    {/* <Avatar
                  size="lg"
                  src="https://picsum.photos/200"
                  alt="Organization Logo"
                /> */}
                    <div className="ml-4">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {OrgData.Name}
                      </h1>
                      <p className="text-lg font-medium text-gray-500">
                        {OrgData.Industry}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Button label="Edit Profile" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md ">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Company Details
                    </h2>
                    <div className="flex items-center mb-2">
                      <p className="text-gray-500 w-1/2">Founded</p>
                      <p className="text-gray-600 w-1/2">{OrgData.Founded}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="text-gray-500 w-1/2">Location</p>
                      <p className="text-gray-600 w-1/2">{OrgData.Location}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="text-gray-500 w-1/2">Website</p>
                      <a
                        href={OrgData.Website}
                        className="text-blue-600 hover:text-blue-500 w-1/2"
                      >
                        {OrgData.Website}
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="text-gray-500 w-1/2">Size</p>
                      <p className="text-gray-600 w-1/2">
                        {OrgData.Size} employees
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="text-gray-500 w-1/2">Specialties</p>
                      <p className="text-gray-600 w-1/2">
                        {OrgData.Specialities}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Mission
                    </h2>
                    <p className="text-gray-600">{OrgData.Mission}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Projects
                  </h2>
                  <div>{OrgData.Projects}</div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Technologies
                  </h2>
                  <div>{OrgData.Technologies}</div>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Open Positions
                  </h2>
                  <div>{OrgData.OpenPositions}</div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-2xl mt-8">
              <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      About Organization
                    </h2>
                    <p className="text-gray-600">{OrgData.Description}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Contact Information
                    </h2>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="text-gray-500 mr-2"
                      />
                      <p className="text-gray-600">{OrgData.Name}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-500 mr-2"
                      />
                      <a
                        href={`mailto:${OrgData.emailId}`}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        {OrgData.emailId}
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-gray-500 mr-2"
                      />
                      <a
                        href={`tel:${OrgData.PhoneNumber}`}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        {OrgData.PhoneNumber}
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-gray-500 mr-2"
                      />
                      <a
                        href={OrgData.Linkedin}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        {OrgData.Linkedin}
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="              text-gray-500 mr-2"
                      />
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Twitter
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-gray-500 mr-2"
                      />
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrganizationProfile;
