const score = (dice) => {
  const diceRollsCounter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < dice.length; i++) {
    diceRollsCounter[dice[i]]++;
  }

  const totalScore = Object.values(diceRollsCounter).reduce((acc, cur, i) => {
    if (i === 0) {
      return acc + (cur % 3) * 100 + Math.trunc(cur / 3) * 1000;
    }
    if (i === 4) {
      return acc + (cur % 3) * 50 + Math.trunc(cur / 3) * 500;
    }
    return acc + Math.trunc(cur / 3) * ((i + 1) * 100);
  }, 0);

  return totalScore;
};
