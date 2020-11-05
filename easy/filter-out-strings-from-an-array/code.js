function filterArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "number") {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

module.exports = filterArray;
