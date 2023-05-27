const jwt = require("jsonwebtoken");
const { SignUp_Model } = require("../../DatabaseSetup/Mongoose.SignUp.Schema");

const GetUserFunction = async (req, res, next) => {
  let Token;
  // const AuthorizationToken= req.headers.Authorization || req.cookies.KeyToken;
  if (req.cookies.KeyToken) {
    Token = req.cookies.KeyToken;
  } else if (req.headers.authorization) {
    Token = req.headers.authorization;
  } else {
    Token = req.headers.Authorization;
  }
  try {
    if (!Token) {
      res.status(500).json({
        status: "Error",
        message: "Unauthorized Access !",
      });
    } else {
      const GotUser = jwt.verify(Token, "KeystoneDev");
      console.log(GotUser.New_User_Details.emailId);
      if (GotUser.New_User_Details.emailId) {
        const UserData = await SignUp_Model.findOne({
          emailId: GotUser.New_User_Details.emailId,
        });
        if (UserData) {
          res.status(200).json({
            status: "Success",
            message: "User found successfully !",
            GotUser: UserData,
          });
        }
      }
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  GetUserFunction,
};
