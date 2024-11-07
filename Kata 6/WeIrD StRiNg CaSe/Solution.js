const toWeirdCase = (string) => {
  const words = string.split(/\s+/);

  return words.map((word) => getWeirdCase(word)).join(" ");
};

const getWeirdCase = (word) => {
  return word
    .split("")
    .map((character, index) => {
      return index % 2 === 0
        ? character.toUpperCase()
        : character.toLowerCase();
    })
    .join("");
};
