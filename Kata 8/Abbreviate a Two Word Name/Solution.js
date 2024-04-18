const abbrevName = (name) => {
  return name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join(".");
};
