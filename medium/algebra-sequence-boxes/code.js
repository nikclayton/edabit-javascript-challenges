function boxSeq(step) {
  let currentNumber = 0;
  if (step === 0) {
    return currentNumber;
  }
  for(let i = 1; i <= step; i++) {
    if (i % 2 === 1) {
      currentNumber += 3
    } else {
      currentNumber -= 1;
    }
  }
  return currentNumber;
}

module.exports = boxSeq;
