function transformUpvotes(str) {
  const arr = [];
  const strArr = str.split(" ");
  for(let i = 0; i < strArr.length; i++) {
    if (strArr[i].indexOf("k") !== -1) {
      let newNum = strArr[i].replace(/k/g, "");
      let convertNum = parseFloat(newNum);
      let trueNumber = convertNum * 1000;
      arr.push(trueNumber);
    }
  }
}

module.exports = transformUpvotes;
