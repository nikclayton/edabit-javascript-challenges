function isPalindrome(str) {
  let newStr = str.replace(/ /g, "").replace(/,/g, "").replace(/[^\w]/g, "").toLowerCase();
  const strLength = newStr.length - 1;
  for (let i = 0; i < newStr.length; i++) {
    if(newStr[i] !== newStr[strLength - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
