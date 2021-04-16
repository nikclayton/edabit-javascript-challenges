function letterCounter(arr, letter) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === letter) {
        count ++;
      }
    }
  }
  return count;
}

module.exports = letterCounter;
