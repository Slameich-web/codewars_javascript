const findShort = (s) => {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
};
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
