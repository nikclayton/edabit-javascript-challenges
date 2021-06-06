function afterPotion(str) {
  const arr = str.split("");
  let isGrow = false;
  let isShrink = false;
  const returnArr =[];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "A") isGrow = true;
    if (arr[i] === "B") isShrink = true;
    if (isGrow) {
      returnArr.unshift((parseInt(arr[i]) + 1) + "");
      isGrow = false;
    }
    if (isShrink) {
      returnArr.unshift((parseInt(arr[i]) - 1) + "");

      isShrink = false;
    }
  }
  console.log(returnArr)

  return  returnArr.join("");
}

module.exports = afterPotion;
