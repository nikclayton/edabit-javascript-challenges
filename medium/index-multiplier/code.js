function indexMultiplier(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += (i * arr[i])
  }
  return total;
}

module.exports = indexMultiplier;
