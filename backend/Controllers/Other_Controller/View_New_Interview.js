const {
  Interview_Details_Model,
} = require("../../DatabaseSetup/Mongoose.InterviewDetails.Schema");
const View_New_Interview_Function = async (req, res, next) => {
  const { Res_Interview_ID } = req.body;

  const View_Interview_Result = await Interview_Details_Model.findOne({
    Interview_ID: Res_Interview_ID,
  });

  if (View_Interview_Result) {
    res.status(200).json({
      status: "Success",
      message: "Interview found successfully !",
      data1: View_Interview_Result,
    });
  } else {
    res.status(500).json({
      status: "Error",
      message: "Unable to find interview !",
    });
  }
};
module.exports = { View_New_Interview_Function };
