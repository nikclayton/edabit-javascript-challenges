function makeTitle(str) {
  const arr = str.split(" ");
  for (let  i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
  }
  const newStr = arr.join(" ")
  return  newStr;
}

module.exports = makeTitle;
