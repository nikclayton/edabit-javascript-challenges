function minMax(arr) {
  const newArr = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  newArr.push(min);
  newArr.push(max);

  return newArr;
}

module.exports = minMax;
