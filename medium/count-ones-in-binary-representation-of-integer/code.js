function countOnes(i) {
  let countOne = 0;
  const binary =  i.toString(2) + ""
  const binaryNumber = binary.split("");
  for(let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === "1") {
      countOne++;
    }
  }
  return countOne
}

module.exports = countOnes;
