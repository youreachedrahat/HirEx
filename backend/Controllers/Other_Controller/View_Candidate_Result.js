const {
  Interview_Result_Model,
} = require("../../DatabaseSetup/Mongoose.Result.Schema");
const View_Candidate_Result_Function = async (req, res, next) => {
  const { Res_Company_Name } = req.body;
  const View_Interview_Result = await Interview_Result_Model.find({
    Company_Name: Res_Company_Name,
  });

  if (View_Interview_Result) {
    res.status(200).json({
      status: "Success",
      message: "Interview result found successfully !",
      data: View_Interview_Result,
    });
  } else {
    res.status(500).json({
      status: "Error",
      message: "Unable to find interview result !",
    });
  }
};

module.exports = { View_Candidate_Result_Function };
