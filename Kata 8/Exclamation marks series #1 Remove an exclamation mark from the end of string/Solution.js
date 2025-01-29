const remove = (string) => {
  if (string[string.length - 1] === "!") {
    return string.slice(0, string.length - 1);
  } else {
    return string;
  }
};
