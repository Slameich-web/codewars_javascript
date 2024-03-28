const longest = (s1, s2) => {
  const stringsConcated = s1 + s2;
  const stringWithoutRepeatedLetters = new Set(stringsConcated.split(""));
  return Array.from(stringWithoutRepeatedLetters).sort().join("");
};
