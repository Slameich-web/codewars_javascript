const bonusTime = (salary, bonus) => {
  if (bonus) {
    return `£${salary * 10}`;
  }
  return `£${salary}`;
};
