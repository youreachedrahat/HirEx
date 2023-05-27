const mongoose = require("mongoose");
const { MONGOOSE_CONNECTION } = process.env;
const bcrypt=require("bcryptjs");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://AkashMalekar:akash123@cluster0.raazx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
mongoose.connection.on("open", () => {
  console.log("Database connection established");
});

//Schema for SignUp Testing
const SignUp_Schema = new mongoose.Schema({
  Name:{
    type:String,
  },
  emailId: {
    type: String,
  },
  Password: {
    type: String,
  },
  TypeofUser: {
    type: String,
  },
  //For Students
  PhoneNumber: {
    type: String,
  },
  Address :{
    type: String,
  },
  TechinalSkillsProgrammingLanguage :{
    type: String,
  },
  TechnicalSkillsFrameworks :{
    type: String,
  },
  TechnicalSkillsDatabase :{
    type: String,
  },
  PastPerformanceProjectDetails :{
    type: String,
  },
  PastPerformanceInternshipDetails :{
    type: String,
  },
  PastPerformanceHackathonDetails :{
    type: String,
  },
  Resume :{
    type: String,
  },

  //For Organization
  Industry:{
    type: String,
  },
  Founded:{
    type: String,
  },
  Location:{
    type: String,
  },
  Website:{
    type: String,
  },
  Size:{
    type:String,
  },
  Specialities:{
    type: String,
  },
  Mission:{
    type: String,
  },
  Projects:{
    type: String,
  },
  Technologies:{
    type: String,
  },
  OpenPositions:{
    type: String,
  },
  Description:{
    type: String,
  },
  Linkedin:{
    type: String,
  },
});
//Pre-SaveMiddleware for Password Encryption
SignUp_Schema.pre("save", async function(){
  this.Password= await bcrypt.hash(this.Password, 12);
})

//Model for SignUp Testing
const SignUp_Model = mongoose.model("SignUp_Model_DB", SignUp_Schema);
module.exports = {
  SignUp_Model, 
};