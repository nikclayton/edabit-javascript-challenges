function charCount(myChar, str) {
  let counted = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === myChar) {
      counted++;
    }
  }
  return counted;
}

module.exports = charCount;
