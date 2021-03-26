function flipArray(arr) {
  const newArr = [];
  let columns = arr[0].length;


  if (columns === undefined) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push([arr[i]]);
    }
  }

  console.log(arr[0], columns)

  return newArr;
}

module.exports = flipArray;
