const reverseLetter = (str) => {
  let strArr = str.match(/[a-zA-Z]/g);
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    arr.unshift(strArr[i]);
  }
  return arr.join("");
};
