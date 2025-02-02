const capitals = (word) => {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) result.push(i);
  }

  return result;
};
