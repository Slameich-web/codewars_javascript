const findUniq = (arr) => {
  let repeated = arr.filter((item, index) => arr.indexOf(item) !== index);
  const result = arr.filter((item) => item !== repeated[0])[0];
  return result;
};
