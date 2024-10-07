const gap = (g, m, n) => {
  let primesCandidates = sieve(n);
  let arr = [];
  let results = [];

  for (let i = m; i <= n; i++) {
    if (primesCandidates[i]) {
      arr.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] == g) {
      results.push(arr[i], arr[i + 1]);
      return results;
    }
  }

  return null;
};

const sieve = (n) => {
  let S = [];
  S[2] = 1;

  for (let k = 3; k <= n; k += 2) {
    S[k] = 1;
  }

  for (let k = 2; k * k <= n; k++) {
    if (S[k] == 1) {
      for (l = k * k; l <= n; l += k) {
        S[l] = 0;
      }
    }
  }
  return S;
};
