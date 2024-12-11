const stringy = (size) => {
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i % 2) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
};
