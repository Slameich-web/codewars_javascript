const listSquared = (m, n) => {
  let matches = [];

  for (let i = m; i <= n; ++i) {
    let sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    let ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
};

const getDivisors = (n) => {
  let divisors = [];

  for (let i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
};
