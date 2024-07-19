const divisors = (integer) => {
  let nums = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      nums.push(i);
    }
  }
  const result = nums.length > 0 ? nums : integer + " is prime";
  return result;
};
