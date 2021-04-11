function getHashTags(str) {
  const longestWords = [];
  const words = str.split(" ")
  let longest = "";
  let secondLongest = "";
  let thirdLongest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      thirdLongest = secondLongest;
      secondLongest = longest;
      longest = words[i].toLowerCase();
    }  else if (words[i].length > secondLongest.length) {
      thirdLongest = secondLongest;
      secondLongest = words[i].toLowerCase();
    } else if (words[i].length > thirdLongest.length)  {
      thirdLongest = words[i].toLowerCase();
    }
  }

  longestWords.push(`#${longest}`);
  longestWords.push(`#${secondLongest}`);
  longestWords.push(`#${thirdLongest}`);

  return longestWords
}

module.exports = getHashTags;
