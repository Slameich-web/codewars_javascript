const narcissistic = (value) => {
  const strN = String(value);
  return (
    strN.split("").reduce((res, acc) => {
      res += parseInt(acc) ** strN.length;
      return res;
    }, 0) === value
  );
};
