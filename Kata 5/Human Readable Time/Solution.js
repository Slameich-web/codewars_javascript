const humanReadable = (seconds) => {
  var hour = ("00" + Math.floor(seconds / 60 / 60)).slice(-2);
  var min = (min = ("00" + Math.floor(seconds / 60 - hour * 60)).slice(-2));
  var second = (second = (
    "00" + Math.floor(seconds - min * 60 - hour * 60 * 60)
  ).slice(-2));

  return hour + ":" + min + ":" + second;
};
