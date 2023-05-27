const natural = require("natural");
const tokenizer = new natural.WordTokenizer();
const TFIDF_Calculator_Function = (candidateAnswer, predefinedAnswer) => {
  // console.error("rrrrrrrrrr",candidateAnswer,"------------",predefinedAnswer);
  let result_Percentage;
  function cosineSimilarity(a, p) {
    const vecA = tokenizer.tokenize(a);
    const vecP = tokenizer.tokenize(p);
    const tfidf = new natural.TfIdf();
    // console.log(vecA, "token", vecP);
    tfidf.addDocument(vecA);
    tfidf.addDocument(vecP);

    const vec1 = [];
    vecA.forEach((term) => {
      const tfidfValue = tfidf.tfidf(term, 0);
      vec1.push(tfidfValue);
    });

    const vec2 = [];
    vecP.forEach((term) => {
      const tfidfValue = tfidf.tfidf(term, 1);
      vec2.push(tfidfValue);
    });

    // const vec2 = tfidf.tfidf(vecP, 0);
    // console.log(vec1, "nexttttt", vec2);

    // Check if the vectors are empty
    if (vecA.length === 0 || vecP.length === 0) {
      console.error("Error: One or both documents are empty.");
      return null;
    }

    const dotProduct = calculateDotProduct(vec1, vec2);
    const norm1 = calculateVectorMagnitude(vec1);
    const norm2 = calculateVectorMagnitude(vec2);
    return dotProduct / (norm1 * norm2);
  }

  function calculateDotProduct(vec1, vec2) {
    let dotProduct = 0;
    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i];
    }
    return dotProduct;
  }

  function calculateVectorMagnitude(vector) {
    let magnitude = 0;
    for (let i = 0; i < vector.length; i++) {
      magnitude += vector[i] ** 2;
    }
    return Math.sqrt(magnitude);
  }

  const similarity = cosineSimilarity(candidateAnswer, predefinedAnswer);
  w = 0.75;
  if (similarity !== null) {
    result_Percentage = similarity * 100;
  }
  return result_Percentage;
};

module.exports = {
  TFIDF_Calculator_Function,
};
