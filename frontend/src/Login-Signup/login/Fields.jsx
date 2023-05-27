import React from "react";
import { useState, useEffect } from "react";
import Arrow from "./images/arrow.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar"; //for snackbar
import { RxCross2 } from "react-icons/rx"; //for snackbar
function Fields(props) {
  const [typeOfUser, setTypeOfUser] = useState("");
  const [loading, setLoading] = useState(true);
  const {
    setIsLoggedIn,
    refresher,
    setRefresher,

    status,
    // setCandidateLog,
    // setOrganizationLog,
  } = props;
  const [Error, setError] = useState("");
  const cookies = new Cookies();

  // useEffect(() => {
  //   if (OrganizationLog === true) {
  //     setTypeOfUser("Company");
  //     setLoading(false);
  //   } else if (candidateLog === true) {
  //     setTypeOfUser("Candidate");
  //     setLoading(false);
  //   }
  // }, [loading]);

  const onsubmit = () => {
    OnClickLogin();
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
  const navigate = useNavigate();
  const BASEURL = process.env.REACT_APP_SAMPLE;
  //Login Api
  const OnClickLogin = async () => {
    console.log("initialValues", initialValues);
    setOpen(true);
    setSnackbarMsg("Please Wait ...");
    setSnackbarClass("default");
    const Temp = await axios
      .post(`${BASEURL}/login`, {
        Res_EmailId: initialValues.name,
        Res_Password: initialValues.password,
        Res_TypeOfUser: status,
      })
      .then((Data) => {
        if (Data) {
          cookies.set("SmartToken", Data.data.data, { maxAge: 86400 });
          navigate("/");
          setIsLoggedIn(true);
          setSnackbarClass("valid");
          setOpen(true);
          setSnackbarMsg("Log in successfully");
          setRefresher(!refresher);
          console.log(refresher);
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

  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
  });

  return (
    <>
      {/* {loading ? (
        <div> Loading </div>
      ) : (
        <> */}
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          onsubmit();
        }}
      >
        {(props) => (
          <Form>
            <div className="flex pl-5">
              <img src={Arrow} alt="img" height="100" width="100"></img>
              &nbsp; &nbsp; &nbsp;{" "}
              <Link to="/user">
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
            <div className="pl-10">
              <div>
                <div className="flex p-2 login font-bold text-4xl ml-24">
                  Log{" "}
                  <div className=" pl-2">
                    <div className="p-0">in</div>

                    <div className="text-xs font-medium p-0">{status}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-24">
              <div className="p-5 pl-0">
                <Field
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="Name"
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
                />
              </div>
              <div className="p-5 pl-0">
                <Field
                  type="password"
                  label="password"
                  name="password"
                  placeholder="Password"
                  className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
                />
              </div>
            </div>
            <div className="ml-24">
              <div className="login text-sm font-semibold">
                Forgot password?
              </div>
            </div>
            <div className="ml-24 pl-0 p-5 ">
              <Button
                variant="contained"
                type="submit"
                className="inline-block py-2 px-4 text-white font-bold rounded-md bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                // className="w-fit p-3 rounded-lg text-white font-semibold button flex"
                onClick={() => {
                  setInitialvalues(props.values);
                  setOpen(true);
                }}
              >
                <div className="pr-20 pl-5">Log In</div>
                <div className="p-1">
                  <FaArrowRight />
                </div>
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
            <div className="h-20">
              <div className="login ml-24 text-xs h-12 flex rounded-full border-gray-400  pr-3 pl-3 round">
                <div className="pl-9 pt-4">don’t have an account yet?</div>
                <Link to="/signup">
                  <div className="font-semibold  pt-4 pl-2 underline hover:cursor-pointer">
                    Sign up
                  </div>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* </>
      )} */}
    </>
  );
}

export default Fields;
