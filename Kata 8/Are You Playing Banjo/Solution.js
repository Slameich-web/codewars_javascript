const areYouPlayingBanjo = (name) => {
  return (
    name +
    (name[0].toUpperCase() === "R" ? " plays banjo" : " does not play banjo")
  );
};
