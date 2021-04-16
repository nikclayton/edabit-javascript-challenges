function canAlternate(s) {
  let zeros = 0;
  let ones = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      zeros++;
    } else {
      ones++;
    }
  }
  const difference = zeros - ones;
  if (difference > 1 || difference < -1) {
    return false;
  } else {
    return true;
  }
}

module.exports = canAlternate;
