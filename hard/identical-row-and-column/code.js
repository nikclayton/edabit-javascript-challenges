function hasIdentical(arr) {
  const columns = [];
  for (let i = 0; i < arr.length; i ++) {
    const column = [];
    for (let k = 0; k <arr[i].length; k++) {
      column.push(arr[k][i])
    }
    columns.push(column)
  }

  console.log(columns)

  for (let i = 0; i < arr.length; i++)  {
    let isTrue = true;
    console.log(arr[i], columns[i])
    for (let k = 0; k < arr.length; k++) {
      console.log(arr[i][k], columns[i][k])
      if (arr[i][k] !== columns[i][k]) {
        isTrue = false;
      }
    }
    if (isTrue) {
      return true;
    }
  }
  return false;
}

module.exports = hasIdentical;
