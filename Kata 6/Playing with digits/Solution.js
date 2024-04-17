function digPow(n, p) {
  let digitSum = 0;
  let strNum = String(n);
  for (let i = 0; i < strNum.length; i++) {
    digitSum += strNum[i] ** p;
    p++;
  }
  const result = Number.isInteger(digitSum / n) ? digitSum / n : -1;
  return result;
}
