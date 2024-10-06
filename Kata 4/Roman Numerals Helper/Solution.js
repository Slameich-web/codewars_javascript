class RomanNumerals {
  static toRoman(num) {
    function units(a) {
      let res = "";
      if (a > 0 && a < 4) {
        for (let i = 0; i < a; i++) {
          res += "I";
        }
      } else if (a == 4) {
        res = "IV";
      } else if (a > 4 && a < 9) {
        res = "V";
        for (let i = 6; i <= a; i++) {
          res += "I";
        }
      } else if (a == 9) {
        res = "IX";
      } else {
        res = "";
      }
      return res;
    }
    function dozens(a) {
      let res = "";
      if (a == 10 || a == 20 || a == 30) {
        for (let i = 0; i < a / 10; i++) {
          res += "X";
        }
      } else if (a == 40) {
        res = "XL";
      } else if (a == 50 || a == 60 || a == 70 || a == 80) {
        res = "L";
        for (let i = 6; i <= a / 10; i++) {
          res += "X";
        }
      } else if (a == 90) {
        res = "XC";
      } else {
        res = "";
      }
      return res;
    }
    function hundreds(a) {
      let res = "";
      if (a == 100 || a == 200 || a == 300) {
        for (let i = 0; i < a / 100; i++) {
          res += "C";
        }
      } else if (a == 400) {
        res = "CD";
      } else if (a == 500 || a == 600 || a == 700 || a == 800) {
        res = "D";
        for (let i = 6; i <= a / 100; i++) {
          res += "C";
        }
      } else if (a == 900) {
        res = "CM";
      } else {
        res = "";
      }
      return res;
    }
    function thousand(a) {
      let res = "";
      if (a == 1000 || a == 2000 || a == 3000 || a == 4000) {
        for (let i = 0; i < a / 1000; i++) {
          res += "M";
        }
      }
      return res;
    }
    return (
      thousand(num - (num % 1000)) +
      hundreds((num % 1000) - (num % 100)) +
      dozens((num % 100) - (num % 10)) +
      units(num % 10)
    );
  }

  static fromRoman(str) {
    let i = 0,
      s = [],
      str_arab = 0;

    while (i <= str.length) {
      if (
        (str[i] == "I" && str[i + 1] == "V") ||
        (str[i] == "I" && str[i + 1] == "X") ||
        (str[i] == "X" && str[i + 1] == "L") ||
        (str[i] == "X" && str[i + 1] == "C") ||
        (str[i] == "C" && str[i + 1] == "D") ||
        (str[i] == "C" && str[i + 1] == "M")
      ) {
        s.push(str[i] + str[i + 1]);
        i += 2;
      } else {
        s.push(str[i]);
        i += 1;
      }
    }

    for (let i = 0; i < s.length; i++) {
      if (s[i] == "M") {
        str_arab += 1000;
      }
      if (s[i] == "CM") {
        str_arab += 900;
      }
      if (s[i] == "D") {
        str_arab += 500;
      }
      if (s[i] == "CD") {
        str_arab += 400;
      }
      if (s[i] == "C") {
        str_arab += 100;
      }
      if (s[i] == "XC") {
        str_arab += 90;
      }
      if (s[i] == "L") {
        str_arab += 50;
      }
      if (s[i] == "XL") {
        str_arab += 40;
      }
      if (s[i] == "X") {
        str_arab += 10;
      }
      if (s[i] == "IX") {
        str_arab += 9;
      }
      if (s[i] == "V") {
        str_arab += 5;
      }
      if (s[i] == "IV") {
        str_arab += 4;
      }
      if (s[i] == "I") {
        str_arab += 1;
      }
    }

    return str_arab;
  }
}
