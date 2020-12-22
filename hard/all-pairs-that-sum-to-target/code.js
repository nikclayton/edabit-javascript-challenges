function allPairs(arr, target) {
  const newArr = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length ; k++) {
      if (arr[i] + arr[k] === target) {
        const tempArr = [];
        if (arr[i] > arr[k]) {
          tempArr.push(arr[k]);
          tempArr.push(arr[i]);
        } else {
          tempArr.push(arr[i]);
          tempArr.push(arr[k]);
        }
        newArr.push(tempArr);
      }
    }
  }
}

module.exports = allPairs;
