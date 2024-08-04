function expandedForm(num) {
  let result = [];
  let len = (num + "").length;
  for (let i = len; i >= 0; i--) {
    if (num / Math.pow(10, i) >= 1) {
      let partRes = Math.floor(num / Math.pow(10, i)) * Math.pow(10, i);
      result.push(partRes);
      num -= partRes;
    }
  }
  return result.join(" + ");
}
