const titleCase = (title, minorWords = "") => {
  const lowerCaseMinorWords = minorWords.toLowerCase().split(" ");
  const result = title
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0 || !lowerCaseMinorWords.includes(word)) {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
      }

      return word;
    })
    .join(" ");
  return result;
};
