const XO = (word) => {
  let xCounter = 0;
  let oCounter = 0;
  const wordLowerCase = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (wordLowerCase[i] === "x") {
      xCounter++;
    }
    if (wordLowerCase[i] === "o") {
      oCounter++;
    }
  }
  return xCounter === oCounter;
};
