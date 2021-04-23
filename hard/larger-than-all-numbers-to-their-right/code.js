function largerThanRight(arr) {
  const largerNumber = [];
  let largestNumber = arr[0];
  let largestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      largestNumber =  arr[i];
      largestIndex = i;
    }
  }

  largerNumber.push(largerNumber)

  for (let i = largestIndex; i < arr.length; i++) {
    if (!largerNumber.includes(arr[i])) {
      largerNumber.push(arr[i])
    }
  }

  return largerNumber;
}

module.exports = largerThanRight;
