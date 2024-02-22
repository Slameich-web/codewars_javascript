const firstNonRepeatingLetter = (s) => {
  const splited = s.toLowerCase().split("");
  const unique = new Set(splited);
  const counted = new Map();
  splited.forEach((char) => {
    if (unique.has(char)) {
      counted[char] = counted[char] + 1 || 1;
      if (counted[char] > 1) {
        unique.delete(char);
      }
    }
  });

  if (unique.size === 0) {
    return "";
  }

  return s[splited.indexOf(unique.values().next().value)];
};
