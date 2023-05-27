function toneAnalyzer(data) {
  return fetch(
    "https://api-inference.huggingface.co/models/bhadresh-savani/bert-base-uncased-emotion",
    {
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

const weights = {
  joy: 0.3,
  love: 0.23,
  surprise: 0.18,
  anger: 0.1,
  sadness: 0.08,
  fear: 0.11,
};

function Tone_Analaysis(req, res, next) {
  const candidateAnswers = req.body.candidateAnswers;

  if (!Array.isArray(candidateAnswers)) {
    res.status(400).json({ error: 'Invalid candidate answers' });
    return;
  }
  try {
    const results = Promise.all(
      candidateAnswers.map((candidateAnswer) =>
        toneAnalyzer({ inputs: candidateAnswer }).then((response) => {
          let weightedSum = 0;
          response[0].forEach(({ label, score }) => {
            if (weights[label]) {
              weightedSum += score * weights[label];
            }
          });
          return weightedSum * 100;
        })
      )
    );

    results
      .then((responses) => {
        const weightedSums = responses.flat();
        // console.log("Weighted Sums:", weightedSums);
        res.json({ weightedSums });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred" });
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}

module.exports = {
  Tone_Analaysis,
};