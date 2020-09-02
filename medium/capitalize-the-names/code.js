function capMe(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    newArr.push(word)
  }
  return newArr;
}

module.exports = capMe;
