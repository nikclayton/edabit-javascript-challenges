function getHashTags(str) {
  const longestWords = [];
  const words = str.split(" ")
  let longest = null;
  let secondLongest = null;
  let thirdLongest = null;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      thirdLongest = secondLongest;
      secondLongest = longest;
      longest = words[i];
    }  else if (words[i].length > secondLongest) {
      thirdLongest = secondLongest;
      secondLongest = words[i];
    } else if (words[i].length > thirdLongest)  {
      thirdLongest = words[i]
    }
  }

  longestWords.push(`# ${longest}`);
  longestWords.push(`# ${secondLongest}`);
  longestWords.push(`# ${thirdLongest}`);

  return longestWords
}

module.exports = getHashTags;
