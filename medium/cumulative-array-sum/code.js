function cumulativeSum(arr) {
  let cumulative = 0;
  const cumulativeArr = [];
  for (let i = 0; i < arr.length; i++) {
    cumulative += arr[i];
    cumulativeArr.push(cumulative)
  }
  return  cumulativeArr;
}

module.exports = cumulativeSum;
