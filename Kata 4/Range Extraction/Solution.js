const solution = (list) => {
  const result = [];
  let str = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === list[i] + 1) {
      str.push(list[i]);
    } else {
      if (str.length <= 1) {
        result.push(...str, list[i]);
      } else {
        result.push(str[0] + "-" + list[i]);
      }
      str = [];
    }
  }
  return result.join();
};
