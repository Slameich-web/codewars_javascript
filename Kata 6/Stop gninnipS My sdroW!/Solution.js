const spinWords = (words) => {
  return words
    .split(" ")
    .map((word) => (word.length < 5 ? word : word.split("").reverse().join("")))
    .join(" ");
};
