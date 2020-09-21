function deleteOccurrences(arr, num) {
  const obj = {};
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;

    } else {
      obj[arr[i]] = 1;
    }
    if (obj[arr[i]] <= num) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

module.exports = deleteOccurrences;
