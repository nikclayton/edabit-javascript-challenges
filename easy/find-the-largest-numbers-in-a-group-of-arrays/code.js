function findLargestNums(arr) {
  const newArr = [];
  for (let i  = 0; i < arr.length; i++) {
    let biggest = arr[i][0]
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] > biggest) {
        biggest = arr[i][k]
      }
    }
    newArr.push(biggest);
  }
  return newArr;
}

module.exports = findLargestNums;
