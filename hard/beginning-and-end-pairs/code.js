function pairs(arr) {
  const newArr = [];
  let arrHalf = null;
  if (arr.length % 2 === 0) {
    arrHalf = arr.length / 2;
  } else {
    arrHalf = (arr.length - 1) / 2;
  }
}

module.exports = pairs;
