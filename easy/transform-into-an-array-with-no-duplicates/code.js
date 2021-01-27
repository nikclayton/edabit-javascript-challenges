function set(arr) {
  const obj = {};
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = arr[i]
      newArr.push(arr[i])
    }
  }

  return newArr;
}

module.exports = set;
