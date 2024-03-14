const duplicateEncode = (word) => {
  let result = "";
  const lowerCaseWord = word.toLowerCase();
  lowerCaseWord.split("").filter((symbol, index) => {
    if (lowerCaseWord.indexOf(symbol) !== index) {
      result += ")";
    } else if (lowerCaseWord.lastIndexOf(symbol) !== index) {
      result += ")";
    } else {
      result += "(";
    }
  });
  return result;
};
