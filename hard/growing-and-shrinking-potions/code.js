function afterPotion(str) {
  const arr = str.split("");
  let isGrow = false;
  let isShrink = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "A") isGrow = true;
    if (arr[i] === "B") isShrink = true;
    if (isGrow) {
      arr[i]  = (parseInt(arr[i]) + 1) + "";
      isGrow = false;
    }
    if (isShrink) {
      arr[i] = (parseInt(arr[i]) - 1) + "";
      isShrink = false;
    }
  }

  return  str.join("");
}

module.exports = afterPotion;
