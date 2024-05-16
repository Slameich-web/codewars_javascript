const sortArray = (array) => {
  const result = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? result.shift() : x));
};
