function set(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = arr[i]
    }
  }
}

module.exports = set;
