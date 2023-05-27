import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Cookies from "universal-cookie";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar"; //for snackbar
import { RxCross2 } from "react-icons/rx"; //for snackbar

function SignupOrganization({ status, setIsLoggedIn }) {
  const [initialValues, setInitialvalues] = useState({
    orgName: "",
    industry: "",
    founded: "",
    location: "",
    website: "",
    size: "",
    specialities: "",
    mission: "",
    projects: "",
    technologies: "",
    openPositions: "",
    description: "",
    email: "",
    phone: "",
    linkedin: "",
    Password: "",
  });
  console.log("Values", initialValues);
  const [Error, setError] = useState("");
  const cookies = new Cookies();
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const SignUpOrg = async () => {
    const Temp = await axios
      .post(`${BASEURL}/SignUp`, {
        Res_Name: initialValues.orgName,
        Res_EmailId: initialValues.email,
        Res_Password: initialValues.Password,
        Res_TypeOfUser: "org",
        Res_PhoneNumber: initialValues.phone,
        Res_Address: initialValues.location,
        Res_industry: initialValues.industry,
        Res_founded: initialValues.founded,
        Res_website: initialValues.website,
        Res_size: initialValues.size,
        Res_specialities: initialValues.specialities,
        Res_mission: initialValues.mission,
        Res_projects: initialValues.projects,
        Res_technologies: initialValues.technologies,
        Res_openPositions: initialValues.openPositions,
        Res_description: initialValues.description,
        Res_linkedin: initialValues.linkedin,
      })
      .then((Data) => {
        if (Data.data.message==="User found Successfully!") {
          cookies.set("SmartToken", Data.data.data, { maxAge: 86400 });
          setIsLoggedIn(true);
          console.log(Data.data.data);
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

  const validationSchema = Yup.object({
    orgName: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    founded: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
    size: Yup.string().required("Required"),
    specialities: Yup.string().required("Required"),
    mission: Yup.string().required("Required"),
    projects: Yup.string().required("Required"),
    technologies: Yup.string().required("Required"),
    openPositions: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    linkedin: Yup.string().url("Invalid URL").required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // TODO: Handle form submission here
    setInitialvalues(values);
    SignUpOrg();
    setSubmitting(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Organization Sign Up
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {
          console.log("Values----------->", initialValues);
          SignUpOrg();
        }}
      >
        {(props) => (
          <Form className="pt-8 pb-2 flex-col space-y-4 card mx-auto w-2/4 items-center">
            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="orgName" className="font-bold mb-1 block">
                  Organization Name<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="orgName"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="orgName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="industry" className="font-bold mb-1 block">
                  Industry<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="industry"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="industry"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="founded" className="font-bold mb-1 block">
                  Founded<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="founded"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="founded"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="location" className="font-bold mb-1 block">
                  Location<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="location"
                  className="form-input w-full px-3  py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="website" className="font-bold mb-1 block">
                  Website<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="website"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="size" className="font-bold mb-1 block">
                  Size<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="size"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="size"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="specialities" className="font-bold mb-1 block">
                  Specialities<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="specialities"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="specialities"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="mission" className="font-bold mb-1 block">
                  Mission<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="mission"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="mission"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="projects" className="font-bold mb-1 block">
                  Projects<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="projects"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="projects"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="technologies" className="font-bold mb-1 block">
                  Technologies<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="technologies"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="technologies"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="openPositions" className="font-bold mb-1 block">
                  Open Positions<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="openPositions"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="technologies" className="font-bold mb-1 block">
                  Email<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="email"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="technologies" className="font-bold mb-1 block">
                  description<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="description"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="technologies" className="font-bold mb-1 block">
                  linkedin<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="linkedin"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="linkedin"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="mb-4 mr-2  w-6/12">
                <label htmlFor="technologies" className="font-bold mb-1 block">
                  Phone<span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
                {/* -------------- */}
                <label htmlFor="Password" className="font-bold mb-1 block">
                  Password<span className="text-red-500">*</span>
                </label>
                <Field
                  type="password"
                  name="Password"
                  className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
                />
                <ErrorMessage
                  name="Password"
                  component="div"
                  className="text-red-500 text-sm"
                />
                {/* -------------- */}
              </div>
              <div className="flex justify-center w-6/12 items-end pb-3 ">
                <button
                  type="submit"
                  className="w-40 h-10 buttonBlack rounded text-white"
                  onClick={() => {
                    setInitialvalues(props.values);
                  }}
                >
                  Submit
                </button>
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
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default SignupOrganization;
