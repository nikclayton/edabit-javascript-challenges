function doubleChar(str) {
  let doubleStr = "";
  for (let i = 0; i < str.length; i++) {
    doubleStr += str[i];
    doubleStr += str[i];
  }
  return doubleStr;
}

module.exports = doubleChar;
