const warnTheSheep = (queue) => {
  let wolfIdx = queue.reverse().indexOf("wolf");

  if (wolfIdx === 0) {
    return "Pls go away and stop eating my sheep";
  }
  return (
    "Oi! Sheep number " + wolfIdx + "! You are about to be eaten by a wolf!"
  );
};
