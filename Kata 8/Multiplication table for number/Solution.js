const multiTable = (number) => {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    const multiplication = `${i} * ${number} = ${i * number}`;
    result += i === 10 ? multiplication : `${multiplication}\n`;
  }

  return result;
};
