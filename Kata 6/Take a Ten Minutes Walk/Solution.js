const isValidWalk = (walk) => {
  let n = [],
    s = [],
    e = [],
    w = [];
  walk.map((v) => {
    if (v === "n") n.push(1);
    if (v === "s") s.push(1);
    if (v === "e") e.push(1);
    if (v === "w") w.push(1);
  });
  return n.length === s.length && w.length === e.length && walk.length === 10;
};
