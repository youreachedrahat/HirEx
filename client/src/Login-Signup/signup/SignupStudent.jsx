import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@mui/material";
import Cookies from "universal-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar"; //for snackbar
import { RxCross2 } from "react-icons/rx"; //for snackbar

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  skills: Yup.object({
    programming: Yup.string().required("Required"),
    frameworks: Yup.string().required("Required"),
    databases: Yup.string().required("Required"),
  }),
  pastPerformance: Yup.object({
    projects: Yup.string().required("Required"),
    internships: Yup.string().required("Required"),
    hackathons: Yup.string().required("Required"),
  }),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = (props) => {
  const { setIsLoggedIn, setRefresher, refresher, status } = props;
  const [Error, setError] = useState("");
  const cookies = new Cookies();
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const SignUpStdudent = async () => {
    const Temp = await axios
      .post(`${BASEURL}/SignUp`, {
        Res_Name: initialValues.username,
        Res_EmailId: initialValues.email,
        Res_Password: initialValues.password,
        Res_TypeOfUser: "student",
        Res_PhoneNumber: initialValues.phone,
        Res_Address: initialValues.address,
        Res_TechinalSkillsProgrammingLanguage: initialValues.skills.programming,
        Res_TechnicalSkillsFrameworks: initialValues.skills.frameworks,
        Res_TechnicalSkillsDatabase: initialValues.skills.databases,
        Res_PastPerformanceProjectDetails:
          initialValues.pastPerformance.projects,
        Res_PastPerformanceInternshipDetails:
          initialValues.pastPerformance.internships,
        Res_PastPerformanceHackathonDetails:
          initialValues.pastPerformance.hackathons,
        Res_Resume: "None",
      })
      .then((Data) => {
        if (Data.data.message==="User found Successfully!") {
          cookies.set("SmartToken", Data.data.data, { maxAge: 86400 });
          setIsLoggedIn(true);
          setRefresher(!refresher);
          console.log(Data.data.message);
        }
      })
      .catch((ErrorR) => {
        setSnackbarClass("invalid");
        setOpen(true);
        setError(ErrorR?.response?.data?.message);
        setSnackbarMsg(ErrorR?.response?.data?.message);
        console.log("kkkkk", ErrorR);
      });
  };

  // for Snackbar
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarClass, setSnackbarClass] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <RxCross2 />
    </button>
  );

  const [initialValues, setInitialvalues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    skills: {
      programming: "",
      frameworks: "",
      databases: "",
    },
    pastPerformance: {
      projects: "",
      internships: "",
      hackathons: "",
    },
    resume: "",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Student Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={() => {
          console.log("i", initialValues);
          SignUpStdudent();
        }}
      >
        {(props) => (
          <Form className="">
            <div className=" pt-8 pb-2 flex-col space-y-4 card mx-auto w-2/4 items-center">
              <div className="flex w-10/12">
                <div className="flex flex-col mr-2  w-6/12">
                  <label htmlFor="username" className="font-bold mb-1">
                    Username:
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col  w-6/12">
                  <label htmlFor="email" className="font-bold mb-1">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex w-10/12">
                <div className="flex flex-col mr-2  w-6/12">
                  <label htmlFor="email" className="font-bold mb-1">
                    Password:
                  </label>
                  <Field
                    type="password"
                    label="password"
                    name="password"
                    placeholder="Password"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col w-6/12">
                  <label htmlFor="email" className="font-bold mb-1">
                    Confirm Password:
                  </label>
                  <Field
                    type="password"
                    label="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex w-10/12">
                <div className="flex flex-col mr-2  w-6/12">
                  <label htmlFor="phone" className="font-bold mb-1">
                    Phone Number:
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col  w-6/12">
                  <label htmlFor="address" className="font-bold mb-1">
                    Address:
                  </label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex w-10/12">
                <div className="flex flex-col mr-2  w-6/12">
                  <label
                    htmlFor="skills.programming"
                    className="font-bold mb-1"
                  >
                    Technical Skills - Programming Languages:
                  </label>
                  <Field
                    type="text"
                    name="skills.programming"
                    placeholder="Enter programming languages"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="skills.programming"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col  w-6/12">
                  <label htmlFor="skills.frameworks" className="font-bold mb-1">
                    Technical Skills - Frameworks and Libraries:
                  </label>
                  <Field
                    type="text"
                    name="skills.frameworks"
                    placeholder="Enter frameworks and libraries"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="skills.frameworks"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex w-10/12">
                <div className="flex flex-col mr-2  w-6/12">
                  <label htmlFor="skills.databases" className="font-bold mb-1">
                    Technical Skills - Database Technologies:
                  </label>
                  <Field
                    type="text"
                    name="skills.databases"
                    placeholder="Enter database technologies"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="skills.databases"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col  w-6/12">
                  <label
                    htmlFor="pastPerformance.projects"
                    className="font-bold mb-1"
                  >
                    Past Performance - Project Details:
                  </label>
                  <Field
                    type="text"
                    name="pastPerformance.projects"
                    placeholder="Enter project details"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="pastPerformance.projects"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex w-10/12">
                <div className="flex flex-col mr-2  w-6/12">
                  <label
                    htmlFor="pastPerformance.internships"
                    className="font-bold mb-1"
                  >
                    Past Performance - Internship Details:
                  </label>
                  <Field
                    type="text"
                    name="pastPerformance.internships"
                    placeholder="Enter internship details"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="pastPerformance.internships"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col  w-6/12">
                  <label
                    htmlFor="pastPerformance.hackathons"
                    className="font-bold mb-1"
                  >
                    Past Performance - Hackathon Details:
                  </label>
                  <Field
                    type="text"
                    name="pastPerformance.hackathons"
                    placeholder="Enter hackathon details"
                    className="px-3 py-2 rounded-md outline-none border border-gray-300"
                  />
                  <ErrorMessage
                    name="pastPerformance.hackathons"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col  w-6/12">
                <label htmlFor="resume" className="font-bold mb-1">
                  Resume:
                </label>
                <Field
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  className="px-3 py-2 rounded-md outline-none border border-gray-300"
                />
                <ErrorMessage
                  name="resume"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex justify-around mt-6  w-64">
                <Link
                  to={
                    status === "org"
                      ? "/org-login"
                      : status === "student"
                      ? "/student-login"
                      : "/user"
                  }
                >
                  <Button
                    variant="contained"
                    type="but"
                    className=" h-12  inline-block py-2 px-4 text-white font-bold rounded-md bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div className="p-1">
                      <FaArrowLeft />
                    </div>
                    Back
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    setInitialvalues(props.values);
                  }}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors"
                >
                  Register
                </Button>
                <Snackbar
                className={snackbarClass}
                sx={{ width: "310px" }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
                message={snackbarMsg}
                anchorOrigin={{
                  vertical: "Bottom",
                  horizontal: "Left",
                }}
              />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default SignupForm;
