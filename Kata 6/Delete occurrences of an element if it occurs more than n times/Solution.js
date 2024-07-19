const deleteNth = (arr, n) => {
  const counter = {};
  const result = [];
  arr.forEach((number) => {
    counter[number] = counter[number] ? counter[number] + 1 : 1;
    const repetitionsCurrentNumber = counter[number];
    if (repetitionsCurrentNumber <= n) {
      result.push(number);
    }
  });
  return result;
};
