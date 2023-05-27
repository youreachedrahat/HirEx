import React, { useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "@mui/material";

function NewInterview({ UserDataData }) {
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [initialValues, setInitialValues] = useState({});
  console.log("Hru", initialValues);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  function generateRandomNumber() {
    const min = 100000; // minimum value
    const max = 999999; // maximum value
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
;
  const createNewInterview = async () => {
    console.log("wewewe");
    const Temp = await axios
      .post(`${BASEURL}/AddNewInterview`, {
        Res_Company_Name: userData.Name,
        Res_Description: initialValues.technologyName,
        Res_HR_Name: initialValues.hrName,
        Res_Instruction: initialValues.instructionD,
        Res_Name_Technology: initialValues.descriptionD,
        Res_Interview_ID: generateRandomNumber(),
        Res_Number_Of_Questions: initialValues.noQuestions,
        Res_Time_Duration: initialValues.interviewDuration,
        Res_Time_Of_Interview: (initialValues.interviewTime).toString(),
        Res_Date_Of_Interview: initialValues.interviewDate,
        Res_Question_Arrays:  initialValues.questions,
        Res_Answer_Arrays: initialValues.answers,
        Res_Email_Arrays: initialValues.emails,
      })
      .then((Data) => {
        console.log("Data--->",Data)
        if (Data.data.message === "Interview added successfully !") {
          alert("Interview created successfully !");
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });

  };

  useEffect(() => {
    setUserData(UserDataData);
    if (userData) {
      setLoading(false);
      console.log(userData);
    }
  }, [loading]);
  const initialVal = {
    descriptionD:"",
    instructionD:"",
    technologyName: "",
    hrName:"",
    noQuestions: 0,
    interviewDate: "",
    interviewTime: "",
    interviewDuration: 0,
    questions: [],
    answers: [],
    noStudents: 0,
    emails: [],
  };

  const handleSubmitInterview =()=> {
    createNewInterview();
  };

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {" "}
          <div className="py-4 flex">
            <div className="flex w-2/4 mx-auto">
              <div className="max-w-2xl mx-auto px-4  ">
                <div className="flex justify-between items-center mx-auto">
                  <h1 className="text-2xl font-bold text-gray-800 ">
                    New Interview
                  </h1>
                  <div className="text-right">
                    <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                      Save
                    </button>
                    <button className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 ml-2">
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="my-4">
                  <p className="text-gray-600">
                    Fill in the form below to schedule a new interview.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="max-w-2xl mx-auto px-4">
              <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold mb-4">Interview Details</h2>
                <Formik
                  initialValues={initialVal}
                  validate={(values) => {
                    const errors = {};
                    if (values.questions.length !== values.noQuestions) {
                      errors.questions = `Please enter ${values.noQuestions} questions`;
                    }
                    if (values.answers.length !== values.noQuestions) {
                      errors.answers = `Please enter ${values.noQuestions} answers`;
                    }
                    if (values.emails.length !== values.noStudents) {
                      errors.emails = `Please enter ${values.noStudents} Emails`;
                    }
                    return errors;
                  }}
                  onSubmit={()=>{createNewInterview();}}
                >
                  {({ values, setFieldValue, errors }) => (
                    <Form>
                      <div className="mb-4">
                        <label
                          htmlFor="technologyName"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Technology Name
                        </label>
                        <Field
                          type="text"
                          id="technologyName"
                          name="technologyName"
                          placeholder="Enter technology name"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="descriptionD"
                          className="block text-gray-700 font-bold mb-2"
                        >
                         Detailed Description
                        </label>
                        <Field
                          type="text"
                          id="descriptionD"
                          name="descriptionD"
                          placeholder="Enter the Descrition about Interview !"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="instructionD"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Instruction for Interview 
                        </label>
                        <Field
                          type="text"
                          id="instructionD"
                          name="instructionD"
                          placeholder="Enter the Instructions / warnings !"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="interviewDate"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Interview Date
                        </label>
                        <Field
                          type="date"
                          id="interviewDate"
                          name="interviewDate"
                          placeholder="Enter interview date"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="interviewTime"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Interview Time
                        </label>
                        <Field
                          type="time"
                          id="interviewTime"
                          name="interviewTime"
                          placeholder="Enter interview time"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="interviewDuration"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Interview Duration (minutes)
                        </label>
                        <Field
                          type="number"
                          id="interviewDuration"
                          name="interviewDuration"
                          placeholder="Enter interview duration in minutes"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="noQuestions"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Number of Questions
                        </label>
                        <Field
                          type="number"
                          id="noQuestions"
                          name="noQuestions"
                          placeholder="Enter number of questions"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div className="mb-4">
                        <div className="border-2 border-black p-5">
                          <label
                            htmlFor="questions"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Questions
                          </label>

                          <FieldArray name="questions">
                            {({ push, remove }) => (
                              <>
                                {values.questions?.map((q, index) => (
                                  <div key={index} className="mb-2">
                                    <Field
                                      name={`questions.${index}`}
                                      placeholder={`Enter question.${
                                        index + 1
                                      }`}
                                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                                    />
                                    <Button
                                      variant="contained"
                                      color="error"
                                      className=" text-white font-bold py-2 px-4 rounded"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                ))}
                                {errors.questions && (
                                  <div className="text-red-600">
                                    {errors.questions}
                                  </div>
                                )}
                                {values.questions?.length <
                                  values.noQuestions && (
                                  <Button
                                    variant="contained"
                                    className=" text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={() => push("")}
                                  >
                                    Add Question
                                  </Button>
                                )}
                              </>
                            )}
                          </FieldArray>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="border-2 border-black p-5">
                          <label
                            htmlFor="answers"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Answers
                          </label>

                          <FieldArray name="answers">
                            {({ push, remove }) => (
                              <>
                                {values.answers?.map((a, index) => (
                                  <div key={index} className="mb-2">
                                    <Field
                                      name={`answers.${index}`}
                                      placeholder={`Enter Answer.${index + 1}`}
                                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                                    />
                                    <Button
                                      variant="contained"
                                      color="error"
                                      className=" text-white font-bold py-2 px-4 rounded"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                ))}
                                {errors.answers && (
                                  <div className="text-red-600">
                                    {errors.answers}
                                  </div>
                                )}
                                {values.answers.length < values.noQuestions && (
                                  <Button
                                    variant="contained"
                                    className=" text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={() => push("")}
                                  >
                                    Add Answer
                                  </Button>
                                )}
                              </>
                            )}
                          </FieldArray>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="noStudents"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Number of Candidates
                        </label>
                        <Field
                          type="number"
                          id="noStudents"
                          name="noStudents"
                          placeholder="Enter number of Candidates"
                          required
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div className="mb-4">
                        <div className="border-2 border-black p-5">
                          <label
                            htmlFor="emails"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Emails
                          </label>

                          <FieldArray name="emails">
                            {({ push, remove }) => (
                              <>
                                {values.emails?.map((q, index) => (
                                  <div key={index} className="mb-2">
                                    <Field
                                      name={`emails.${index}`}
                                      placeholder={`Enter email-${index + 1}`}
                                      className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                                    />
                                    <Button
                                      variant="contained"
                                      color="error"
                                      className=" text-white font-bold py-2 px-4 rounded"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                ))}
                                {errors.emails && (
                                  <div className="text-red-600">
                                    {errors.emails}
                                  </div>
                                )}
                                {values.emails?.length < values.noStudents && (
                                  <Button
                                    variant="contained"
                                    className=" text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={() => push("")}
                                  >
                                    Add Email
                                  </Button>
                                )}
                              </>
                            )}
                          </FieldArray>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button
                          variant="contained"
                          onClick={() => {
                            setInitialValues(values);
                          }}
                          type="submit"
                          className=" text-white font-bold py-2 px-4 rounded"
                        >
                          Save Interview
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewInterview;
