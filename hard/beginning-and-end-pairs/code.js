function pairs(arr) {
  const newArr = [];
  let arrHalf = null;
  if (arr.length % 2 === 0) {
    arrHalf = arr.length / 2;
  } else {
    arrHalf = (arr.length - 1) / 2;
  }

  for (let i = 0; i < arrHalf; i++) {
    const tempArr = [];
    tempArr.push(arr[i]);
    tempArr.push(arr[arr.length - (i + 1)])
    newArr.push(tempArr);
  }
  return newArr;
}



module.exports = pairs;
