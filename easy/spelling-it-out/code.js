function spelling(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.substr(0, i))
  }

  return arr;
}

module.exports = spelling;
