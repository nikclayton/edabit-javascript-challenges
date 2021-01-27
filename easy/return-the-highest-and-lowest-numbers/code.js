function highLow(str) {
  const numbers = str.split(" ")
  let highest =  parseInt(numbers[0])
  let lowest = parseInt(numbers[0])
  for (let i = 0; i < numbers.length; i++) {
    if (highest < parseInt(numbers[i])) {
      highest = parseInt(numbers[i]);
    }
    if (lowest > parseInt(numbers[i])) lowest = parseInt(numbers[i])
  }
  return highest + " " + lowest;
}

module.exports = highLow;
