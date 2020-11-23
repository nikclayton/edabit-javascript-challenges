function mauriceWins(mSnails, sSnails) {
  let wins = 0;

  if (mSnails[0] > sSnails[2]) {
    wins++;
  }
  if (mSnails[1] > sSnails[0]) {
    wins++
  }
  if (mSnails[2] > sSnails[1]) {
    wins++
  }

  if (wins >= 2) {
    return true;
  } else  {
    return false;
  }
}

module.exports = mauriceWins;
