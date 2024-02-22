const scramble = (str1, str2) => {
  let hashtab = [...new Array(256)].map((x) => 0);

  str2.split("").forEach((ele) => hashtab[ele.charCodeAt(0)]++);
  str1.split("").forEach((ele) => hashtab[ele.charCodeAt(0)]--);

  hashtab = hashtab.filter((x) => x > 0);

  return hashtab.length == 0;
};
