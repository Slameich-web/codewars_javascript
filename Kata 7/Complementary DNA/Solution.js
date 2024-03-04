const dnaStrand = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "A":
        result = result + "T";
        break;
      case "T":
        result = result + "A";
        break;
      case "C":
        result = result + "G";
        break;
      case "G":
        result = result + "C";
        break;
      default:
        return "Your DNA is not from this planet";
    }
  }
  return result;
};
