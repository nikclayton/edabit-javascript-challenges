function countAll(str) {
    const letters = str.split("")
    const count = {}
    let lettersCount = 0;
    let  numberCount = 0;
    for (let i = 0; i < letters.length; i++) {
      if (isNaN(letters[i])) {
        lettersCount++;
      } else if (letters[i] === " ") {
        continue;
      }  else {
        numberCount++
      }
    }
    count.LETTERS = lettersCount;
    count.DIGITS = numberCount;
    return  count;
}

module.exports = countAll;
