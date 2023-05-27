const {
  Interview_Result_Model,
} = require("../../DatabaseSetup/Mongoose.Result.Schema");
const Add_Candidate_Result_Function = async(req, res, next) => {
  const {
    Res_Candidate_Name,
    Res_Candidate_Email,
    Res_Company_Name,
    Res_HR_Name,
    Res_Name_Technology,
    Res_Number_Of_Questions,
    Res_Time_Duration,
    Res_Time_Of_Interview,
    Res_Date_Of_Interview,
    Res_Question_Arrays,
    Res_Answer_Arrays,
    Res_Performance_Array,
    Res_Text_Percentage,
    Res_Time_Percentage,
    Res_confidence_Percentage,
    Res_Overall_Percentage,
  } = req.body;
  const Add_Interview_Result = await Interview_Result_Model.create({
    Candidate_Name: Res_Candidate_Name,
    Candidate_Email: Res_Candidate_Email,
    Company_Name: Res_Company_Name,
    HR_Name: Res_HR_Name,
    //Interview Details
    Name_Technology: Res_Name_Technology,
    Number_Of_Questions: Res_Number_Of_Questions,
    Time_Duration: Res_Time_Duration,
    Time_Of_Interview: Res_Time_Of_Interview,
    Date_Of_Interview: Res_Date_Of_Interview,
    //Question bank details
    Question_Arrays: Res_Question_Arrays,
    Answer_Arrays: Res_Answer_Arrays,
    Performance_Array: Res_Performance_Array,
    Text_Percentage: Res_Text_Percentage,
    Time_Percentage: Res_Time_Percentage,
    confidence_Percentage: Res_confidence_Percentage,
    Overall_Percentage: Res_Overall_Percentage,
  });

  if (Add_Interview_Result) {
    res.status(200).json({
      status: "Success",
      message: "Interview result added successfully !",
      data: Add_Interview_Result,
    });
  } else {
    res.status(500).json({
      status: "Error",
      message: "Unable to add interview result !",
    });
  }
};

module.exports = { Add_Candidate_Result_Function };
