function minMaxLengthAverage(arr) {
  const newArr = [];
  let min = arr[0];
  let max = arr[0];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
    total += arr[i]
  }
  newArr.push(min);
  newArr.push(max);
  newArr.push(arr.length);
  newArr.push(total / arr.length);

  return newArr;
}

module.exports = minMaxLengthAverage;
