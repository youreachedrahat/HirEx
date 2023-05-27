import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WithoutLogin from "./Routing/WithoutLogin.jsx";
import WithLogin from "./Routing/WithLogin";
import InterviewShow from "./Student/InterviewShow.jsx";

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);

  const [status, setStatus] = useState("");

  return (
    <>
      {/* <InterviewShow /> */}
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
    </>
  );
}

export default App;
