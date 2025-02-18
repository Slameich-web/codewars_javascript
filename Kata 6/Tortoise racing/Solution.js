const race = (v1, v2, g) => {
  if (v2 <= v1) {
    return null;
  }

  let res = Math.floor((3600 * g) / (v2 - v1));
  return [Math.floor(res / 3600), Math.floor(res / 60) % 60, res % 60];
};
