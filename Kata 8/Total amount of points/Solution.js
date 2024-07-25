const points = (games) =>
  games.reduce((res, game) => {
    return (res += game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0);
  }, 0);
