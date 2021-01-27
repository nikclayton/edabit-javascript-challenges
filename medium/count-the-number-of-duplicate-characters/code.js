function duplicateCount(str) {
  const countDup = {};
  let count = 0;
  for (let i = 0; i < str.length;  i++) {
      if (countDup.hasOwnProperty(str[i])) {
        countDup[str[i]]++;
      } else {
        countDup[str[i]] = 1;
      }
  }
  for (const property in countDup) {
    if (countDup[property] > 1)  {
      count++;
    }
  }
  return count;
}

module.exports = duplicateCount;
