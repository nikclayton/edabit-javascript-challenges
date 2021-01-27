function equal(a, b, c) {
  if (a === b) {
    if (a === c) {
      return 3;
    } else {
      return 2;
    }
  } else {
    if (a === c) {
      return 2;
    } else if (b === c) {
      return 2;
    }
  }
  return 0;
}

module.exports = equal;
