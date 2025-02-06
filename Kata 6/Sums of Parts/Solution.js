const partsSums = (ls) => {
  let sum = ls.reduce((acc, curr) => acc + curr, 0);
  const result = [sum];
  for (let i = 0; i < ls.length; i++) {
    sum -= ls[i];
    result.push(sum);
  }
  return result;
};
