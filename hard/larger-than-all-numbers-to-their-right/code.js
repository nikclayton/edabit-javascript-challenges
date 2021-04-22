function largerThanRight(arr) {
  const largerNumber = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[0] < arr[i] && !largerNumber.includes(arr[i])) {
      largerNumber.push(arr[i])
    }
  }

  return largerNumber;
}

module.exports = largerThanRight;
