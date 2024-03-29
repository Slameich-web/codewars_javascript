const accum = (s) => {
  let letters = s.split(""),
    words = [];

  for (let i = 0; i < letters.length; i++) {
    words.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }

  return words.join("-");
};
