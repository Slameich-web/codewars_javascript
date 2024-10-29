const create = (str) => {
  let obj = {};
  str
    .replace(/[^a-z]/g, "")
    .split("")
    .map((x) => (obj[x] ? obj[x]++ : (obj[x] = 1)));
  for (let i in obj) {
    obj[i] == 1 && delete obj[i];
  }
  return obj;
};

const mix = (s1, s2) => {
  let result = [],
    objS1 = create(s1),
    objS2 = create(s2);
  for (let i in objS1) {
    if (objS2[i]) {
      objS1[i] > objS2[i] && result.push("1:" + i.repeat(objS1[i]));
      objS1[i] < objS2[i] && result.push("2:" + i.repeat(objS2[i]));
      objS1[i] == objS2[i] && result.push("=:" + i.repeat(objS1[i]));
    } else {
      result.push("1:" + i.repeat(objS1[i]));
    }
  }
  for (let i in objS2) {
    !objS1[i] && result.push("2:" + i.repeat(objS2[i]));
  }
  return result
    .sort(function (a, b) {
      return b.length - a.length || (a < b ? -1 : 1);
    })
    .join("/");
};
