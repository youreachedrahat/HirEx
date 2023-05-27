const Get_Video_Recording_Function = async(req, res, next) => {
    if (req.body) {
        res.status(200).json({
          status: "Success",
          message: "Interview send successfully !",
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to send interview !",
        });
      }
  };
  module.exports = { Get_Video_Recording_Function };
  