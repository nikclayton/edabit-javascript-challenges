function findRepeating(str) {
  const arr = [];
  let stack = 0;
  const tempArr = [];
  for (let i = 0; i < str.length; i++)  {
    let current = str[i];
    if (stack === 0) {
      tempArr.push(str[i]);
    }
  }
}

module.exports = findRepeating;
