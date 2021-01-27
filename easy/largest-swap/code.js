function largestSwap(num) {
  const oneDigit = num % 10;
  const tenDigit = Math.floor(num / 10);
  if (oneDigit > tenDigit) {
    return false;
  } else {
    return true;
  }
}

module.exports = largestSwap;
