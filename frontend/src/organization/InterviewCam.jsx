import Extra from "./Extra";
import "./InterviewCam.css";

const InterviewCam = () => {
  return (
    <div>
      <div className="Interview-Container">
        <div className="Interview-Container-Left">
          <div className="Left-Circle-1">
            <div className="Left-Candidate-Screen">
              <div className="Candidate-Screen-WebCam">
                <div className="In-Progress">
                  <span style={{ fontSize: "18px" }}>&#9679; </span>Interview
                  In-Progress
                </div>
              </div>
            </div>
            <div className="Left-Candidate-Sound-Amplifier">
              <div className="Sound-Amplifier-Design"></div>
              <div className="Sound-Amplifier-Button">
                <div className="Amplifier-Button-Start">Start</div>
                <div className="Amplifier-Button-Controls Control-1">
                  <div className="Cross"></div>
                </div>
                <div className="Amplifier-Button-Controls Control-2">
                  <div className="Cross"></div>
                </div>
                <div className="Amplifier-Button-Start">Finish</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Interview-Container-Right">
          <div className="Left-Circle-2">
            <div className="Left-Candidate-Screen">
              <div className="Candidate-Screen-WebCam">
                <div className="In-Progress">
                  <span style={{ fontSize: "18px" }}>&#9679; </span>Interview
                  In-Progress
                </div>
              </div>
            </div>
            <div className="Left-Candidate-Sound-Amplifier">
              <div className="Sound-Amplifier-Design"></div>
              <div className="Sound-Amplifier-Button">
                <div className="Amplifier-Button-Start">Repeat Question</div>
                <div className="Amplifier-Button-Controls Control-3">
                  <div className="Cross"></div>
                </div>
                <div className="Amplifier-Button-Start">Next Question</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Extra />
    </div>
  );
};

export default InterviewCam;
