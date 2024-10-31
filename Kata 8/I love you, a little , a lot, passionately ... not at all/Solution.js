const howMuchILoveYou = (nbPetals) => {
  const newPetals = nbPetals % 6;
  if (newPetals === 1) {
    return "I love you";
  } else if (newPetals === 2) {
    return "a little";
  } else if (newPetals === 3) {
    return "a lot";
  } else if (newPetals === 4) {
    return "passionately";
  } else if (newPetals === 5) {
    return "madly";
  } else return "not at all";
};
