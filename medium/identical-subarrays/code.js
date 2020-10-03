function countIdentical(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      counter++;
    } else {
      let equal = true;
      for (let k = 1; k < arr[i].length; k++) {
        if (arr[i][0] !== arr[i][k]) {
          equal = false;
        }
      }
      if (equal) {
        counter++;
      }
    }
    return  counter;
  }
}

module.exports = countIdentical;
