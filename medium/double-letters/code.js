function doubleLetters(word) {
  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) {
      return false;
    }
    if (word[i] === word[i + 1]) {
      return true;
    }
  }
}

module.exports = doubleLetters;
