const revrot = (str, sz) => {
  const isEven = (v) => {
    return v.split("").reduce((cubeSum, d) => (cubeSum += d ** 3), 0) % 2 === 0;
  };
  const reverse = (v) => {
    return v.split("").reverse().join("");
  };
  const rotate = (v) => {
    return v.slice(1) + v.slice(0, 1);
  };

  return (str.match(new RegExp(`.{${sz}}`, "g")) || [])
    .map((v) => (isEven(v) ? reverse(v) : rotate(v)))
    .join("");
};
