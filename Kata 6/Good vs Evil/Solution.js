const GOOD_CREATURES_FORCE = [1, 2, 3, 3, 4, 10];

const EVIL_CREATURES_FORCE = [1, 2, 2, 2, 3, 5, 10];

const getForce = (forceSide, raceCounting) => {
  return raceCounting.split(" ").reduce((totalForce, currentForce, index) => {
    return totalForce + forceSide[index] * Number(currentForce);
  }, 0);
};

const goodVsEvil = (good, evil) => {
  const goodForce = getForce(GOOD_CREATURES_FORCE, good);
  const evilForce = getForce(EVIL_CREATURES_FORCE, evil);

  return `Battle Result: ${
    goodForce > evilForce
      ? "Good triumphs over Evil"
      : evilForce > goodForce
      ? "Evil eradicates all trace of Good"
      : "No victor on this battle field"
  }`;
};
