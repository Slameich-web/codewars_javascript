const longestConsec = (strarr, k) => {
  let result = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    let tempStr = strarr.slice(i, i + k).join("");
    if (tempStr.length > result.length) {
      result = tempStr;
    }
  }
  return result;
};
