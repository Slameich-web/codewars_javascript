const openOrSenior = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result[i] = data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open";
  }
  return result;
};
