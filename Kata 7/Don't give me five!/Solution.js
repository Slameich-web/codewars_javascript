const dontGiveMeFive = (start, end) => {
  let answer = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf("5") > -1) {
      continue;
    } else {
      answer++;
    }
  }
  return answer;
};
