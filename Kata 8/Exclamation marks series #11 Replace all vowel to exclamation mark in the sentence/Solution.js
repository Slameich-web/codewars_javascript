const replace = (s) => {
  let result = "";
  for (let el of s) {
    let vowels = "aouieAOUIE";
    if (vowels.includes(el)) {
      result += "!";
    } else {
      result += el;
    }
  }
  return result;
};
