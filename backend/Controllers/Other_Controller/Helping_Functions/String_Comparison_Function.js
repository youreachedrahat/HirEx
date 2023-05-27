const {TFIDF_Calculator_Function}= require("./TFIDF_Calculator");
const {Tone_Function} = require("../Helping_Functions/Tone_Analyzer");
const {Custome_Match_Function} = require("../Helping_Functions/Custome_Match");
const String_Comparison_Function = async (
  Original_Array, Candidate_Array
) => {
  let Answer_Result_Array=[]
  let FinalPercentage=[]
  let AddingD=0
  for(let i=0; i<Original_Array.length; i++){
    // console.log("Candidate_Array",Candidate_Array[i]);
    const customCalculate= Custome_Match_Function(Original_Array[i],Candidate_Array[i]);
    // cdd= Tone_Function(Candidate_Array[i]);
    // console.log(cdd);
    if(customCalculate===null){
      Answer_Result_Array.push(0);
    }else{
      Answer_Result_Array.push(customCalculate);
    }
  }
  console.log("Summ------======-",AddingD);
  function sumArray(Array) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
      sum += Array[i];
    }
    return sum;
  }
  let sumOfPercent=sumArray(Answer_Result_Array);
  FinalPercentage=(sumOfPercent/((Answer_Result_Array.length)*100))*100;
  return [Answer_Result_Array,FinalPercentage];
};
module.exports = {
  String_Comparison_Function,
};
