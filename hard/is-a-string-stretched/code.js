function isStretched(s1, s2) {
  let newStr = "";
  let firstLetter = s1[0]
  let inRow = 0;

  for (let i = 0; i < s1.length; i++)  {
    if (firstLetter === s1[i])   inRow++;
    else {
      break;
    }
  }

  for (let i = 0; i < s1.length; i += inRow) {
    console.log(i);
    newStr += s1[i]
  }

  console.log(newStr, inRow);

  if (newStr ===  s2)  return true;
  return false;
}

module.exports = isStretched;
