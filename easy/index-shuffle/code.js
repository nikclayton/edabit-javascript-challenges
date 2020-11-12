function indexShuffle(str) {
  let evenIndex = "";
  let oddIndex  = "";
  for (let i = 0; i < str.length; i++) {
    if (i  % 2 === 0) {
      evenIndex += str[i];
    } else {
      oddIndex += str[i];
    }
  }
  return evenIndex + oddIndex;
}

module.exports = indexShuffle;
