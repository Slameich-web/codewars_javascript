const wave = (str) =>
  [...str]
    .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
    .filter((x) => x != str);
