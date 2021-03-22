function findShortestWords(str) {
  const words = str.split(" ");
  const wordLength = [];
  const shortest = [];
  let min = words[0].length;
  for (let i = 0; i < words.length; i++) {
    wordLength.push(words[i].length);
    if (min > words[i].length) min = words[i].length;
  }

  for (let i = 0; i < words.length; i++)  {
    if (words[i].length === min) {
      shortest.push(words[i].toLowerCase());
    }
  }

  console.log(words, wordLength, min);
  return shortest.sort();
}

module.exports = findShortestWords;
