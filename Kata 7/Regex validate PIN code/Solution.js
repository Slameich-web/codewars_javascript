const validatePIN = (pin) => {
  if (pin.length === 4 || pin.length === 6) {
    return /^\d+$/.test(pin);
  }

  return false;
};
