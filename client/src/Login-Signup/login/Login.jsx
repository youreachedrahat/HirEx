import React from "react";
import Fields from "./Fields";
import Conference from "./images/conference.png";
import Header from "../../organization/Header";
import Footer from "../../organization/Footer";
function Login(props) {
  const {
    setDisplay,
    candidateLog,
    OrganizationLog,
    isLogged,
    setIsLoggedIn,
    refresher,
    setRefresher,
    status,
    setSignup,
    setCandidateLog,
    setOrganizationLog,
    show,
    setShow,
  } = props;

  return (
    <div>
      <div className="">
        <Header setDisplay={setDisplay} />
      </div>
      <div className="flex">
        <div className="w-2/5">
          <Fields
            show={show}
            setShow={setShow}
            setCandidateLog={setCandidateLog}
            setOrganizationLog={setOrganizationLog}
            OrganizationLog={OrganizationLog}
            candidateLog={candidateLog}
            isLogged={isLogged}
            setIsLoggedIn={setIsLoggedIn}
            refresher={refresher}
            setRefresher={setRefresher}
            status={status}
            setSignup={setSignup}
          />
        </div>
        <div className="flex justify-center items-center p-28">
          <img src={Conference} alt="img" />
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
export default Login;
