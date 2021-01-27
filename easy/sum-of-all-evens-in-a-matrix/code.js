function sumOfEvens(arr) {
  let evenTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if  (arr[i][k] % 2 === 0) {
        evenTotal += arr[i][k];
      }
    }
  }

  return evenTotal;
}

module.exports = sumOfEvens;
