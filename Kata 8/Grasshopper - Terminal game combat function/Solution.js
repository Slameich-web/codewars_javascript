function combat(health, damage) {
  const result = health - damage;
  if (result < 0) {
    return 0;
  }
  return result;
}
