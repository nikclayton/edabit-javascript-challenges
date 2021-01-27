function combo(arr, n) {
  const newArr = [];
  if (arr.length < n) {
    return newArr;
  }
  if (n === 0) {
    newArr.push([]);
    return newArr;
  }
  for(let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      const tempArr = [arr[i]];
      tempArr.push(arr[k]);
      newArr.push(tempArr);
    }
  }

  console.log(newArr)

  return newArr;
}

module.exports = combo;
