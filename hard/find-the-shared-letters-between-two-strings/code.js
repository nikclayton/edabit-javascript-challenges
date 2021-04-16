function sharedLetters(str1, str2) {
  const copies  =  [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i]) && !copies.includes(str1[i]))  {
      copies.push(str1[i]);
    }
  }

  copies.sort();

  return copies.join("");
}

module.exports = sharedLetters;
