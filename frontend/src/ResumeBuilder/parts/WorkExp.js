import React from "react";
import { Formik, Form, Field } from "formik";
import { FieldArray } from "formik";
import { workexpschema } from "../schema/schema";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";

const WorkExp = ({ activeStep, setActiveStep, workinfo, setWorkInfo }) => {
  const onSubmit = () => {
    setActiveStep((step) => step + 1);
  };
  return (
    <div className="flex  justify-center text-center mb-6">
      <Formik
        initialValues={workinfo}
        onSubmit={onSubmit}
        validationSchema={workexpschema}
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
              </div>
            </div>
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className="flex flex-col justify-start"
            >
              <div className=" flex justify-start  pl-1 ">
                Skip Work Experience?{" "}
              </div>
              <div className=" flex justify-start p-3">
                <label className="pr-2">
                  <Field type="radio" name="skip" value="Yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="skip" value="No" />
                  No
                </label>
              </div>
              <div className="flex pl-3 pb-2">
                {props.errors.skip ? (
                  <p className="  text-red-600">{props.errors.skip}</p>
                ) : null}
              </div>
            </div>
            <div className="">
              <h1 className="flex justify-start pl-1">
                {" "}
                Add Multiple Work Experience:
              </h1>
              <FieldArray
                name="work"
                render={(arrayhelpers) => {
                  return (
                    <div>
                      {props.values?.work ? (
                        [0] &&
                        props.values.work?.map((item, index) => {
                          return (
                            <div
                              className="mt-2  border-solid shadow-xl mb-5 rounded-lg "
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
                                <div className="flex justify-start  italic w-fit p-1 text-slate-400   ">{`Experience ${
                                  index + 1
                                }`}</div>
                                <div className="card-body p-2">
                                  {/* Position and Company name below  */}
                                  {/* Position and Company name below  */}
                                  {/* Position and Company name below  */}

                                  <div className="flex justify-between ">
                                    <div className=" flex-col  w-1/2  flex">
                                      <label
                                        className="flex justify-start pl-1"
                                        htmlFor={`work.${index}.position`}
                                      >
                                        Position:
                                      </label>

                                      <Field
                                        name={`work.${index}.position`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="text"
                                        placeholder="Position"
                                      />
                                      {/* {props.errors.email &&
                                          props.touched.email ? (
                                            <p className="  text-red-600">
                                              {props.errors.email}
                                            </p>
                                          ) : null} */}
                                    </div>

                                    <div className="w-1/2 flex flex-col">
                                      <label
                                        className="flex justify-start pl-1"
                                        htmlFor={`work.${index}.company`}
                                      >
                                        Company Name:
                                      </label>

                                      <Field
                                        name={`work.${index}.company`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="text"
                                        placeholder="Position"
                                      />
                                      {/* {props.errors.phone &&
                                          props.touched.phone ? (
                                            <p className="  text-red-600">
                                              {props.errors.phone}
                                            </p>
                                          ) : null} */}
                                    </div>
                                  </div>

                                  {/* Certificate and location below  */}
                                  {/* Certificate and location below  */}
                                  {/* Certificate and location below  */}
                                  {/* Certificate and location below  */}

                                  <div className="flex justify-between ">
                                    <div className=" flex-col  w-1/2  flex">
                                      <label
                                        className="flex justify-start pl-1"
                                        htmlFor={`work.${index}.certificate`}
                                      >
                                        Certificate Link:
                                      </label>

                                      <Field
                                        name={`work.${index}.certificate`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="text"
                                        placeholder="Certificate"
                                      />
                                      {/* {props.errors.email &&
                                          props.touched.email ? (
                                            <p className="  text-red-600">
                                              {props.errors.email}
                                            </p>
                                          ) : null} */}
                                    </div>

                                    <div className="w-1/2 flex flex-col">
                                      <label
                                        className="flex justify-start pl-1"
                                        htmlFor={`work.${index}.location`}
                                      >
                                        Location:
                                      </label>

                                      <Field
                                        name={`work.${index}.location`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="text"
                                        placeholder="Location"
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
                                        htmlFor={`work.${index}.start`}
                                      >
                                        Start date:
                                      </label>

                                      <Field
                                        name={`work.${index}.start`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="date"
                                        placeholder="Date"
                                      />
                                    </div>

                                    <div className="w-1/2 flex flex-col">
                                      <label
                                        className="flex justify-start pl-1"
                                        htmlFor={`work.${index}.end`}
                                      >
                                        End Date:
                                      </label>

                                      <Field
                                        name={`work.${index}.end`}
                                        className=" p-2 m-1   rounded border-2 "
                                        type="date"
                                        placeholder="End date"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex flex-col justify-start">
                                    <label
                                      className="flex justify-start pl-1"
                                      htmlFor={`work.${index}.description`}
                                    >
                                      Description:
                                    </label>

                                    <Field
                                      type="text"
                                      label="description"
                                      name={`work.${index}.description`}
                                      placeholder="Description"
                                      className=" p-2 m-1   rounded border-2 "
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <></>
                      )}
                      <button
                        type="button"
                        className="float-right flex   text-blue-600 p-1 italic rounded-xl"
                        onClick={() => {
                          arrayhelpers.insert(props.values.work.length + 1, {
                            country: "",
                            city: "",
                            position: "",
                            company: "",
                            certificate: "",
                            location: "",
                            start: "",
                            end: "",
                            description: "",
                          });
                          console.log("gdgd");
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
                  setWorkInfo(props.values);
                }}
                className="bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3"
              >
                Next
              </Button>
              {}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkExp;
