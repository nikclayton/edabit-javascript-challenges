function sharedLetters(str1, str2) {
  const copies  =  [];
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i]))  {
      copies.push(str1[i]);
    }
  }

  return copies;
}

module.exports = sharedLetters;
