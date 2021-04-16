function alternatingCaps(str) {
  let word = ""
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (i % 2 === 0) {
      word += letter.toUpperCase();
    } else {
      word += letter.toLowerCase();
    }
  }
  return word;
}

module.exports = alternatingCaps;
