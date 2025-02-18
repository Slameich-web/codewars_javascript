const encode = (string) => {
  return string.replace(/[aeiou]/g, (v) => {
    if (v === "a") return 1;
    if (v === "e") return 2;
    if (v === "i") return 3;
    if (v === "o") return 4;
    if (v === "u") return 5;
  });
};

const decode = (string) => {
  return string.replace(/[1-5]/g, (v) => {
    if (v === "1") return "a";
    if (v === "2") return "e";
    if (v === "3") return "i";
    if (v === "4") return "o";
    if (v === "5") return "u";
  });
};
