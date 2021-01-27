function isAnagram(s1, s2) {
  const word1 = s1.toLowerCase().split("");
  const word2 = s2.toLowerCase().split("");
  for(let i = 0; i < word1.length; i++) {
    if (!word2.includes(word1[i])) {
      return false;
    } else {
      const index = word2.indexOf(word1[i])
      word2.splice(index, 1)
    }
  }
  if (word2.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
