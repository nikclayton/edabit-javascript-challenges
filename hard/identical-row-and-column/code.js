function hasIdentical(arr) {
  const columns = [];
  for (let i = 0; i < arr.length; i ++) {
    const column = [];
    for (let k = 0; k <arr[i].length; k++) {
      column.push(arr[k][i])
    }
    columns.push(column)
  }

  for (let i = 0; i < arr.length; i++)  {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i][k] !== columns[i][k]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = hasIdentical;
