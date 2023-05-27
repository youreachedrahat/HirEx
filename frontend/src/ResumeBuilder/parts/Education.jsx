import React from "react";
import { Form, Formik, Field, FieldArray } from "formik";
import { FaPlus } from "react-icons/fa";
import { educationschema } from "../schema/schema";
import { Button } from "@mui/material";

const Education = ({
  activeStep,
  setActiveStep,
  eduinfo,
  setEduInfo,
  setResume,
}) => {
  const onSubmit = () => {
    // setActiveStep(0);
    setResume(true);
  };
  return (
    // <div>
    <div className="flex  justify-center text-center mb-6">
      <Formik
        initialValues={eduinfo}
        onSubmit={onSubmit}
        validationSchema={educationschema}
      >
        {(props) => (
          <Form className="flex flex-col justify-center text-center align-middle border-2 rounded-lg border-gray-400 w-1/2 p-2">
            <div className="flex flex-col">
              <div className="flex flex-col justify-start mb-6">
                <label className="flex justify-start pl-1">Title:</label>
                <Field
                  type="text"
                  label="Name"
                  name="title"
                  placeholder="Basic Information"
                  className=" p-3 m-1   rounded border-2 "
                />
                {props.errors.title ? (
                  <p className="  text-red-600">{props.errors.title}</p>
                ) : null}
              </div>
              <div className="">
                <h1> Add Multiple Education</h1>
                <FieldArray
                  name="education"
                  render={(arrayhelpers) => {
                    return (
                      <div>
                        {props.values?.education[0] &&
                          props.values.education?.map((item, index) => {
                            return (
                              <div
                                className="mt-2  border-solid shadow-2xl mb-5 rounded-lg "
                                key={index}
                              >
                                {index > 0 && (
                                  <div>
                                    <button
                                      type="button"
                                      className="float-right text-xl "
                                      onClick={() => arrayhelpers.remove(index)}
                                    >
                                      ❌
                                    </button>
                                  </div>
                                )}
                                <div className="p-5">
                                  <div className="flex justify-start  italic w-fit p-1 text-slate-400   ">{`Education ${
                                    index + 1
                                  }`}</div>
                                  <div className="card-body p-2">
                                    <div className="flex flex-col justify-start">
                                      <label
                                        className="flex justify-start pl-1"
                                        htmlFor={`education.${index}.name`}
                                      >
                                        Name:
                                      </label>

                                      <Field
                                        name={`education.${index}.name`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="text"
                                        placeholder="Name eg: B-Tech"
                                      />

                                      {props.errors.name &&
                                      props.touched.name ? (
                                        <p className=" text-red-600">
                                          {props.errors.name}
                                        </p>
                                      ) : null}
                                    </div>

                                    {/* Position and Company name below  */}
                                    {/* Position and Company name below  */}
                                    {/* Position and Company name below  */}

                                    <div className="flex justify-between ">
                                      <div className=" flex-col  w-1/2  flex">
                                        <label
                                          className="flex justify-start pl-1"
                                          htmlFor={`education.${index}.collage`}
                                        >
                                          Collage/School Name:
                                        </label>

                                        <Field
                                          name={`education.${index}.collage`}
                                          className=" p-2 m-1   rounded border-2 "
                                          type="text"
                                          placeholder="Collage/School Name"
                                        />
                                      </div>

                                      <div className="w-1/2 flex flex-col">
                                        <label
                                          className="flex justify-start pl-1"
                                          htmlFor={`education.${index}.percentage`}
                                        >
                                          Percentage:
                                        </label>

                                        <Field
                                          name={`education.${index}.percentage`}
                                          className=" p-2 m-1   rounded border-2 "
                                          type="text"
                                          placeholder="Pecentage %"
                                        />
                                      </div>
                                    </div>

                                    {/* Start date and end date below  */}
                                    {/* Start date and end date below  */}
                                    {/* Start date and end date below  */}
                                    {/* Start date and end date below  */}

                                    <div className="flex justify-between ">
                                      <div className=" flex-col  w-1/2  flex">
                                        <label
                                          className="flex justify-start pl-1"
                                          htmlFor={`education.${index}.start`}
                                        >
                                          Start date:
                                        </label>

                                        <Field
                                          name={`education.${index}.start`}
                                          className=" p-2 m-1   rounded border-2 "
                                          type="date"
                                          placeholder="Date"
                                        />
                                      </div>

                                      <div className="w-1/2 flex flex-col">
                                        <label
                                          className="flex justify-start pl-1"
                                          htmlFor={`education.${index}.end`}
                                        >
                                          End Date:
                                        </label>

                                        <Field
                                          name={`education.${index}.end`}
                                          className=" p-2 m-1   rounded border-2 "
                                          type="date"
                                          placeholder="End date"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        <button
                          type="button"
                          className="float-right flex   text-blue-600 p-1 italic rounded-xl"
                          onClick={() => {
                            arrayhelpers.insert(
                              props.values.education.length + 1,
                              {
                                name: "",
                                collage: "",
                                percentage: "",
                                start: "",
                                end: "",
                              }
                            );
                          }}
                        >
                          <div className="p-1 ">
                            <FaPlus />
                          </div>
                          New
                        </button>
                      </div>
                    );
                  }}
                />
                <br />
              </div>
            </div>
            <div className="flex justify-around">
              <Button
                variant="contained"
                type="button"
                className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
                onClick={() => setActiveStep((step) => step - 1)}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                variant="contained"
                type="submit"
                onClick={() => {
                  setEduInfo(props.values);
                }}
                className="bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3"
              >
                Finish
              </Button>
            </div>

            {}
          </Form>
        )}
      </Formik>
    </div>
    // </div>
  );
};

export default Education;
