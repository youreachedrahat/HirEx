const { FillersRemover } = require("./Helping_Functions/FillersRemover");
const {
  Interview_Details_Model,
} = require("../../DatabaseSetup/Mongoose.InterviewDetails.Schema");

const {
  String_Comparison_Function,
} = require("./Helping_Functions/String_Comparison_Function");
const Percentage_Calculator_Function = async (req, res, next) => {
  const { Res_Interview_ID, Res_Answer_Array, Res_Interview_Timing } = req.body;
  // console.log("req.body", req.body);
  try {
    //Find the Interivew details...
    const Find_Interview = await Interview_Details_Model.findOne({
      Interview_ID: Res_Interview_ID,
    });
    if (Find_Interview) {
      // console.log("Find_Interview", Find_Interview);
      //Filtered Answers.....
      // console.log("Res_Answer_Array", Res_Answer_Array);
      const FilterCandidateArray = FillersRemover(Res_Answer_Array);
      const FilterOrginalArray = FillersRemover(Find_Interview.Answer_Arrays);
      // console.log("FilterOrginalArray", FilterCandidateArray);
      //Comparing with the original answer.....
      const fixTime = 30000;
      let calArrayPercentage;
      // await String_Comparison_Function(
      //   FilterArray,
      //   Find_Interview.Question_Arrays,
      //   Find_Interview.Answer_Arrays
      // )
      //   .then((answer) => {
      //     calArrayPercentage = answer;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      let finalResultArray;
      const timePercentage = (Res_Interview_Timing / ((Find_Interview.Time_Duration)*60)) * 100;
      // console.log(Res_Interview_Timing);
      // console.log((Find_Interview.Time_Duration)*60);
      // console.log(timePercentage);

      String_Comparison_Function(FilterOrginalArray,FilterCandidateArray).then((Data)=>{
        finalResultArray=Data;
        if (finalResultArray) {
          // console.log("calTonePercentage",finalResultArray[2]);
          res.status(200).json({
            status: "Success",
            message: "Result found successfully !",
            answerPercentageList: finalResultArray[0],
            overAllPercentage: finalResultArray[1],
            timeResult:timePercentage
          });
        } else {
          res.status(500).json({
            status: "Error",
            message: "Unable to calculate percentage !",
          });
        }
      }).catch((err)=>{
          console.log(err);
    });

     
    }
  } catch (Error) {
    console.log("Error", Error);
  }
};
module.exports = { Percentage_Calculator_Function };
