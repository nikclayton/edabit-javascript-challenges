function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !==6) {
    return false;
  }
  const parsed = parseInt(pin);
  if (parsed < 1000) {
    return false;
  }
  if (isNaN(parsed)) {
    return false
  } else {
    return true
  }
}

module.exports = validatePIN;
