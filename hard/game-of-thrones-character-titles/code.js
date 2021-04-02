function correctTitle(str) {
 const words = str.split(" ")
 for (let i = 0; i < words.length; i++) {
  const currentWord = words[i].toLowerCase();
  if (currentWord  === "and" || currentWord === "the" || currentWord === "of"
      || currentWord === "in") {
        words[i] = currentWord;
      } else {
        words[i]  = currentWord[0].toUpperCase() + currentWord.substring(1, currentWord.length);
      }
 }
 return words.join(" ")
}

module.exports = correctTitle;
