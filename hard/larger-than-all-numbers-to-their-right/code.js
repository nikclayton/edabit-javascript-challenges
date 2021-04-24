function largerThanRight(arr) {
  const largerNumber = [];
  let largestNumber = arr[0];
  let isLargest = true;

  for (let i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      isLargest = false;
    }
  }

  console.log(largestNumber, isLargest)

  if (isLargest) {
    largerNumber.push(largestNumber);
  }

  for (let i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i] && !largerNumber.includes(arr[i])) {
      largerNumber.push(arr[i])
    }
  }

  return largerNumber;
}

module.exports = largerThanRight;
