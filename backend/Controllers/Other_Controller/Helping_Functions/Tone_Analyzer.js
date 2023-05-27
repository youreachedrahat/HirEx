const Tone_Function = (AnswerD) => {
  // ---------------------------
  let toneAnswer;
  let dsds;
  try {
    async function toneAnalyzer(data) {
      return fetch(
        "https://api-inference.huggingface.co/models/bhadresh-savani/bert-base-uncased-emotion",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      )
        .then((response) => (toneAnswer = response.json()))
        .catch((error) => {
          console.error("Error:", error);
          throw error;
        });
    }
    candidateAnswerD = AnswerD; //pass candidate answer not array
    const weights = [0.3, 0.23, 0.1, 0.11, 0.08, 0.18];

    toneAnalyzer({ inputs: candidateAnswerD }).then((response) => {
      // const [joy, anger, sadness, fear, surprise, love] = response[0].map(
      //   ({ score }) => score
      // );
      // console.log("----------------------------------------------",response);
      // let sumF = 0;
      // for (let i = 0; i < 5; i++) {
      //   sumF = sumF + response[0][i].score * weights[i];
      // }
      if (response) {
        dsds = response[0];
        console.log("dsds", response);
      }

      // let weightedSum = 0;
      // response[0].forEach(({ label, score }) => {
      //   if (weights[label]) {
      //     weightedSum += parseInt(score) * weights[label];
      //   }
      // });
      // toneAnswer=weightedSum * 100;
    });

    return dsds;
  } catch (Error) {
    console.log("Error-->", Error);
  }
};
module.exports = {
  Tone_Function,
};
