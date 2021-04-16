function countOnes(matrix) {
  let counted = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === 1) {
        counted++
      }
    }
  }
  return counted;
}

module.exports = countOnes;
