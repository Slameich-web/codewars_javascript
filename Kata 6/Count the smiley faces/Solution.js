function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let result = 0;
  let validSmileys = [
    ":)",
    ";)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ":-)",
    ":~)",
    ";~D",
    ";~)",
    ";-D",
    ";-)",
  ];
  for (let face of arr) {
    if (validSmileys.includes(face)) {
      result++;
    }
  }
  return result;
}
