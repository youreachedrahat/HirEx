import { Route, Routes } from "react-router";
import Decide from "../Login-Signup/login/Decide";
import Login from "../Login-Signup/login/Login";
import SignupOrganization from "../Login-Signup/signup/SignupOrganization";
import SignupStudent from "../Login-Signup/signup/SignupStudent";
import Home from "../pages/Home";
import LandingPg from "../pages/LandingPg";
import ChatBot from "../ChatbotComponents/chatbot";
import ResumeBuilder from "../ResumeBuilder/ResumeBuilder";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const WithoutLogin = (Props) => {
  const {
    setIsLoggedIn,

    setStatus,
    status,
  } = Props;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/getstarted" element={<LandingPg />} />
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/user" element={<Decide setStatus={setStatus} />} />
        <Route
          path="/org-login"
          element={<Login status={status} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/student-login"
          element={<Login status={status} setIsLoggedIn={setIsLoggedIn} />}
        />
        {console.log("Hrushiii", status)}
        <Route
          path="/signup"
          element={
            status === "org" ? (
              <SignupOrganization
                status={status}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : status === "student" ? (
              <SignupStudent status={status} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <>
                <h1>404 Not Found</h1>
              </>
            )
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default WithoutLogin;
