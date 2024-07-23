function solution(string) {
  let result = string.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= "A" && result[i] <= "Z") {
      result[i] = " " + result[i];
    }
  }
  return result.join("");
}
