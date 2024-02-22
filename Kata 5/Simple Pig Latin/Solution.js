const pigIt = (str) => {
  return str
    .split(" ")
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(" ");
};
