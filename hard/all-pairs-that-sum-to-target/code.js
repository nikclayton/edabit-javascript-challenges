function allPairs(arr, target) {
  const newArr = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length ; k++) {
      if (arr[i] + arr[k] === target) {
        const tempArr = [];
        if (arr[i] > arr[k]) {
          arr.push(arr[k]);
          arr.push(arr[i]);
        }
      }
    }
  }
}

module.exports = allPairs;
