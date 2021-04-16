function alliterationCorrect(sentence) {
  const words = sentence.split(" ");
  const letters = [];
  let sameLetter = ''
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      const currentLetter = words[i].substr(0, 1).toLowerCase();
      letters.push(currentLetter);
      if (sameLetter === '') {
        sameLetter = letters[0].toLowerCase();
      }
      if (sameLetter !== currentLetter) {
        return false;
      }
    }
  }
  return true;
}

module.exports = alliterationCorrect;
