function chunkify(arr, size) {
  const newArr = [];
  while (arr.length !== 0) {
    const currentArr = [];
    for (let i = 0; i < size; i++) {
      if (arr.length === 0) {
        break;
      }
      currentArr.push(arr.shift());
    }
    newArr.push(currentArr)
  }
  return newArr;
}

module.exports = chunkify;
