import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Loader/Loader";
import WithoutLogin from "./Routing/WithoutLogin.jsx";
import WithLogin from "./Routing/WithLogin";
import InterviewShow from "./Student/InterviewShow.jsx";

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 2000 with the actual loading time for your data or resources
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Display the loader while loading
      ) : (
        <BrowserRouter>
          {isLogged ? (
            <WithLogin
              setStatus={setStatus}
              status={status}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <WithoutLogin
              setStatus={setStatus}
              status={status}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
