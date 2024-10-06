const bouncingBall = (h, bounce, window) => {
  let rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) {
      rebounds += 2;
      h *= bounce;
    }
  return rebounds;
};
