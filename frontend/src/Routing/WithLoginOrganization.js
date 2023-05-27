import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenaav from "../organization/Sidebar/SideNavButton";
import AddStudent from "../organization/AddStudent/AddStudent";
import NewInterview from "../organization/NewInterview/NewInterview";
import Results from "../organization/pages/ResultsList/Results";
import OrganizationProfile from "../organization/pages/OrganizationProfile";

function WithLoginOrganization({ setOrganizationLog, setSignup }) {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidenaav
          setOrganizationLog={setOrganizationLog}
          setSignup={setSignup}
        />
        <Routes>
          <Route path="/" element={<OrganizationProfile />} />
          <Route path="/profile" element={<OrganizationProfile />} />
          <Route path="/newinterview" element={<NewInterview />} />
          <Route
            path="/addstudents"
            element={<AddStudent list={list} setList={setList} />}
          />

          <Route path="/viewresults" element={<Results list={list} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default WithLoginOrganization;
