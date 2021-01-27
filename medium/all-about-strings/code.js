function allAboutStrings(str) {
  const arr = [];
  const letters = [];
  let repeat = false;
  arr.push(str.length);
  arr.push(str.substring(0, 1));
  arr.push(str.substring(str.length - 1));
  if(str.length % 2 === 1) {
    arr.push(str.substr((str.length - 1) / 2, 1))
  } else {
    arr.push(str.substr(((str.length - 1) / 2), 2))
  }

  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      arr.push(`@ index ${i}`)
      repeat = true;
      break;
    } else {
      letters.push(str[i])
    }
  }

  if (!repeat) {
    arr.push("not found");
  }

  console.log(arr)
  return arr;
}

module.exports = allAboutStrings;
