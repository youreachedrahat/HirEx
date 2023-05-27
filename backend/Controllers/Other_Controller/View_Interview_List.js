const {
  Interview_Details_Model,
} = require("../../DatabaseSetup/Mongoose.InterviewDetails.Schema");
const View_Interview_List_Function = async (req, res, next) => {
  const { Res_Interviewer_Email } = req.body;
  const View_Interview_List = await Interview_Details_Model.find({
    Email_Arrays: {
      $elemMatch :{$eq :Res_Interviewer_Email}
    }
  });

  if (View_Interview_List) {
    res.status(200).json({
      status: "Success",
      message: "Interview list found successfully !",
      data1: View_Interview_List,
    });
  } else {
    res.status(500).json({
      status: "Error",
      message: "Unable to find interview list!",
    });
  }
};

module.exports = { View_Interview_List_Function };
