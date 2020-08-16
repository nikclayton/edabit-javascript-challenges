function accumulatingProduct(arr) {
  let accumulate = 0;
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    accumulate *= arr[i];
    newArray.push(accumulate);
  }
  return newArray;
}

module.exports = accumulatingProduct;
