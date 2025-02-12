const removeDuplicateWords = (s) => {
  let result = [];

  s.split(" ").forEach(function (word) {
    if (!result.includes(word)) {
      result.push(word);
    }
  });

  return result.join(" ");
};
