function cleanString(s) {
  let result = [];
  s.split("").forEach((char) => {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  });
  return result.join("");
}
