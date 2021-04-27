function largerThanRight(arr) {
  const largerNumber = [];
  let largestNumber = arr[0];
  let isLargest = true;
  let largestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      isLargest = false;
      largestNumber =  arr[i]
      largestIndex = i;
    }
  }

  if (isLargest === true) {
    for (let i = 0; i < arr.length; i++) {
      if (!largerNumber.includes(arr[i])) {
        largerNumber.push(arr[i])
      }
    }
    return largerNumber;
  }

  for (let i = largestIndex; i < arr.length; i++) {
    if (arr[0] < arr[i] && !largerNumber.includes(arr[i])) {
      largerNumber.push(arr[i])
    }
  }

  return largerNumber;
}

module.exports = largerThanRight;
