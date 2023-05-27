const {
  SignUp_Model,
} = require("../../DatabaseSetup/Mongoose.SignUp.Schema.js");
const ViewProfile = async (req, res, next) => {
  const { Res_EmailId } = req.body;
  console.log(req.body.Res_TypeofUser);
  try {
    const find_Checks = await SignUp_Model.findOne({
      emailId: Res_EmailId,
    });
    if (find_Checks) {
        res.status(200).json({
            status: "Success",
            message: "Candidate found successfully !",
            data: find_Checks
          });
    } else {
      res.status(500).json({
        statusbar: "error",
        message: "Unable to find Candidate!",
      });
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  ViewProfile,
};
