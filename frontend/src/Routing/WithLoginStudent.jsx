import React from "react";
import InterviewShow from "../Student/InterviewShow";
import Cookies from "universal-cookie";
import Sidenaav from "../Student/Sidebar/SideNavButton";


function WithLoginStudent(Props) {
  const cookies = new Cookies();
  const handleLogoutFunction = () => {
    cookies.remove("SmartToken");
    window.location.reload();
  };
  return (
    <>
      {" "}
      <div>
      <Sidenaav
          // setOrganizationLog={setOrganizationLog}
          // setSignup={setSignup}
        />
        <InterviewShow />
      </div>
      <button onClick={()=>{handleLogoutFunction()}}>Logout</button>
    </>
  );
}

export default WithLoginStudent;
