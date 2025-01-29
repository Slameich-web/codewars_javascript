const declareWinner = (fighter1, fighter2, firstAttacker) => {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = fighter1.name === firstAttacker ? fighter2 : fighter1;
  let winner = null;

  while (!winner) {
    defender.health -= attacker.damagePerAttack;

    attacker = attacker === fighter1 ? fighter2 : fighter1;
    defender = defender === fighter1 ? fighter2 : fighter1;

    if (defender.health <= 0) {
      winner = attacker.name;
    }
  }

  return winner;
};
