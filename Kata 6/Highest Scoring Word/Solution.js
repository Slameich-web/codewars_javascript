const high = (sentence) => {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const words = sentence.split(" ");

  const getWordScore = (word) => {
    return word.split("").reduce((score, currentCharacter) => {
      return score + (ALPHABET.indexOf(currentCharacter) + 1);
    }, 0);
  };

  const wordsWithScore = words.map((word) => {
    return { word: word, score: getWordScore(word) };
  });

  const result = wordsWithScore.sort((a, b) => b.score - a.score)[0].word;

  return result;
};
