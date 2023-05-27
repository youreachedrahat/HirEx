const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const AuthenticationMiddleware = async (req, res, next) => {
  try {
    let Authorization;
    // const AuthorizationToken= req.headers.Authorization || req.cookies.KeyToken;
    if (req.cookies.KeyToken) {
      Authorization = req.cookies.KeyToken;
    } else {
        Authorization = req.headers.authorization;
    }
    if (!Authorization) {
      res.status(500).json({
        status: "Error",
        message: "Please provide a valid Authorization Token!",
      });
    } else {
      const DecodedToken = await promisify(jwt.verify)(
        Authorization,
        "KeystoneDev"
      );
      if (!DecodedToken) {
        res.status(500).json({
          status: "Error",
          message: "Invalid Token!",
        });
        return;
      } else {
        next();
      }
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  AuthenticationMiddleware,
};
