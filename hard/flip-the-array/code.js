function flipArray(arr) {
  if (!arr[0]) {
    return [];
  }
  const newArr = [];
  let columns = arr[0].length;

  if (columns === undefined) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push([arr[i]]);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i][0]);
    }
  }

  console.log(arr[0], columns)

  return newArr;
}

module.exports = flipArray;
