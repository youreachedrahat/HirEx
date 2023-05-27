import React, { useEffect, useState } from "react";

const StudentProfilePage = ({ UserDataData }) => {
  const [studentData, setStudentData] = useState({});
  console.log("Hrushikesh Student data", studentData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setStudentData(UserDataData);

    if (studentData) {
      setLoading(false);
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {" "}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Profile"
                      />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold mb-1">
                        {studentData.Name}
                      </h1>
                      <p className="text-lg text-gray-500">{studentData.emailId}</p>
                    </div>
                  </div>
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Personal Information
                      </h3>
                      {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Edit your personal information and save changes here.
                </p> */}
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            UserName
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {studentData.Name}
                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.emailId}
                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Phone number
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {studentData.PhoneNumber}
                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Residentail Address
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.Address}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Technical Skills
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Well known languages, Frameworks and Libraries :
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Programming languages
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.TechinalSkillsProgrammingLanguage}
                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Frameworks and libraries
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.TechnicalSkillsFrameworks}
                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Database technologies
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.TechnicalSkillsDatabase}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Past Performance
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Here are some of my past achievements:
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Projects
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.PastPerformanceProjectDetails}

                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Hackathons
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.PastPerformanceHackathonDetails}
                          </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Internships
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {studentData.PastPerformanceInternshipDetails}
                          </dd>
                        </div>
                      </dl>
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

export default StudentProfilePage;
