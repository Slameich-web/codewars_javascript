const generateHashtag = (str) => {
  if (!str.trim()) {
    return false;
  }

  const result =
    "#" +
    str
      .split(" ")
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join("");

  return result.length > 140 ? false : result;
};
