const meeting = (str) => {
  return str
    .toUpperCase()
    .split(";")
    .map((name) => {
      let [firstName, lastName] = name.split(":");
      return `(${lastName}, ${firstName})`;
    })
    .sort()
    .join("");
};
