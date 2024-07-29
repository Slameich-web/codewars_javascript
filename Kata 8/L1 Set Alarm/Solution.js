const setAlarm = (employed, vacation) => {
  if (employed && !vacation) {
    return true;
  }
  return false;
};
