const getGrade = (s1, s2, s3) => {
  const result = (s1 + s2 + s3) / 3;
  if (result >= 90) {
    return "A";
  }
  if (result >= 80) {
    return "B";
  }
  if (result >= 70) {
    return "C";
  }
  if (result >= 60) {
    return "D";
  }
  return "F";
};
