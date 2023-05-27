const {
  SignUp_Model,
} = require("../../DatabaseSetup/Mongoose.SignUp.Schema.js");
const SignUpFunction = async (req, res, next) => {
        const { Res_Name, Res_EmailId, Res_Password, Res_TypeOfUser,Res_PhoneNumber,Res_Address,Res_TechinalSkillsProgrammingLanguage,Res_TechnicalSkillsFrameworks,Res_TechnicalSkillsDatabase,Res_PastPerformanceProjectDetails,Res_PastPerformanceInternshipDetails,Res_PastPerformanceHackathonDetails,Res_Resume,Res_industry,Res_founded,Res_website,Res_size,Res_specialities,Res_mission,Res_projects,Res_technologies,Res_openPositions,Res_description,Res_linkedin} = req.body;
  try {
    const already_exist_Checks = await SignUp_Model.findOne({
      $or: [
        {
          Name: Res_Name,
        },
        {
          emailId: Res_EmailId,
        },
      ],
    });
    if (!already_exist_Checks) {
      if(Res_TypeOfUser==="student"){
        const SavedData_SignUp = await SignUp_Model.create({
          Name: Res_Name,
          emailId: Res_EmailId,
          Password: Res_Password,
          TypeofUser: "student",
          PhoneNumber:Res_PhoneNumber,
          Address:Res_Address,
          TechinalSkillsProgrammingLanguage:Res_TechinalSkillsProgrammingLanguage,
          TechnicalSkillsFrameworks:Res_TechnicalSkillsFrameworks,
          TechnicalSkillsDatabase:Res_TechnicalSkillsDatabase,
          PastPerformanceProjectDetails:Res_PastPerformanceProjectDetails,
          PastPerformanceInternshipDetails:Res_PastPerformanceInternshipDetails,
          PastPerformanceHackathonDetails:Res_PastPerformanceHackathonDetails,
          Resume:Res_Resume
        });  
        //Adding found user object to req.user for token generation.
        req.User = SavedData_SignUp;
        console.log("weeee90909009-->",SavedData_SignUp);
        //Calling authentication middleware for token generation.
        next();
      }else{
        const SavedData_SignUp = await SignUp_Model.create({
          Name: Res_Name,
          emailId: Res_EmailId,
          Password: Res_Password,
          TypeofUser: "org",
          PhoneNumber:Res_PhoneNumber,
          Industry:Res_industry,
          Founded:Res_founded,
          Location:Res_Address,
          Website:Res_website,
          Size:Res_size,
          Specialities:Res_specialities,
          Mission:Res_mission,
          Projects:Res_projects,
          Technologies:Res_technologies,
          OpenPositions:Res_openPositions,
          Description:Res_description,
          Linkedin:Res_linkedin
        });
        //Adding found user object to req.user for token generation.
        req.User = SavedData_SignUp;
        console.log("weeee90909009ORG-->",SavedData_SignUp);
        //Calling authentication middleware for token generation.
        next();
      }

    } else {
      res.status(500).json({
        statusbar: "error",
        message: "User already exist!",
        data: already_exist_Checks,
      });
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  SignUpFunction,
};
