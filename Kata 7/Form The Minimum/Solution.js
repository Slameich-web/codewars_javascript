const minValue = (values) => {
  return +values
    .filter((el, i) => i === values.indexOf(el))
    .sort((a, b) => a - b)
    .join("");
};
