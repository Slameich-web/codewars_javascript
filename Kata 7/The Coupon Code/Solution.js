const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  let date = new Date(currentDate);
  let expDate = new Date(expirationDate);
  if (date.getTime() - expDate.getTime() > 0) {
    return false;
  }
  if (enteredCode !== correctCode) {
    return false;
  }
  return true;
};
