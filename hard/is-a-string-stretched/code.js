function isStretched(s1, s2) {
  let newStr = "";

  for (let i = 0; i < s1.length; i++) {
    if (newStr.slice(-1) !== s1[i]) {
      newStr += s1[i]
    }
  }

  console.log(newStr);

  if (newStr ===  s2)  return true;
  return false;
}

module.exports = isStretched;
