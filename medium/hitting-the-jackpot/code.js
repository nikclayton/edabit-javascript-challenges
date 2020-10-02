function testJackpot(result) {
  if  (result[0] !== result[1]) {
    return false;
  }
  if (result[0] !== result[2]) {
    return false;
  }
  if (result[0] !== result[3]) {
    return false;
  }
  return true;
}

module.exports = testJackpot;
