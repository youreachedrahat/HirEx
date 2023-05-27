const express = require("express");
const Router1 = express.Router();
const Router2 = express.Router();
const Router3 = express.Router();
const Router4 = express.Router();
const Router5 = express.Router();
const Router6= express.Router();
const Router7= express.Router();
const Router8= express.Router();
const Router9= express.Router();
const Router10= express.Router();
const Router11= express.Router();
const Router12= express.Router();
const Router13= express.Router();


const {
  TokenGenerator_Middleware,
} = require("../Authentication/TokenGenerator.middleware");
const {
  AuthenticationMiddleware,
} = require("../Authentication/Auth.Middleware");
const { LoginFunction } = require("../Controllers/Common_Controller/Login");
const { SignUpFunction } = require("../Controllers/Common_Controller/SignUp");
const {
  Add_Candidate_Result_Function,
} = require("../Controllers/Other_Controller/Add_Candidate_Result");
//Percentage Calculator
const {
  Percentage_Calculator_Function,
} = require("../Controllers/Other_Controller/PercentageCounter");
const {
  Add_New_Interview,
} = require("../Controllers/Other_Controller/Add_New_Interview");
const {Get_Video_Recording_Function} =require("../Controllers/Other_Controller/Get_Video_Recording");
const {ViewProfile} = require("../Controllers/Other_Controller/ViewProfile");
const {View_Interview_List_Function} = require("../Controllers/Other_Controller/View_Interview_List");
const {View_New_Interview_Function} = require("../Controllers/Other_Controller/View_New_Interview");
const {Emotion_Detection_Function} = require("../Controllers/Other_Controller/EmotionResult");
const {Tone_Analaysis} = require("../Controllers/Other_Controller/ToneAnalysis");
const{GetUserFunction} = require("../Controllers/Common_Controller/GetUserFunction");
const {View_Candidate_Result_Function} = require("../Controllers/Other_Controller/View_Candidate_Result");
Router1.route("/").post(LoginFunction, TokenGenerator_Middleware);
Router2.route("/").post(SignUpFunction, TokenGenerator_Middleware);
Router3.route("/").post(
  Percentage_Calculator_Function
);

Router4.route("/").post(Add_New_Interview);
Router5.route("/").post(
  Add_Candidate_Result_Function
);
Router6.route("/").post(
  Get_Video_Recording_Function
);
Router7.route("/").post(
  ViewProfile
);
Router8.route("/").post(
  View_Interview_List_Function
);
Router9.route("/").post(
  View_New_Interview_Function
);
Router10.route("/").post(
  Emotion_Detection_Function
);
Router11.route("/").post(
  GetUserFunction
);
Router12.route("/").post(
  View_Candidate_Result_Function
);
Router13.route("/").post(
  Tone_Analaysis
);
module.exports = {
  Router1,
  Router2,
  Router3,
  Router4,
  Router5,
  Router6,
  Router7,
  Router8,
  Router9,
  Router10,
  Router11,
  Router12,
  Router13,
};
