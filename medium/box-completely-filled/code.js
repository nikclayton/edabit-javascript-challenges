function completelyFilled(arr) {
  const boxLength = arr[0].length;
  if (boxLength < 3) {
    return true;
  }
  for (let i = 0; i < arr.length; i++)  {
    if (arr[i].includes(" ")) {
      return false;
    }
  }
  return true;
}

module.exports = completelyFilled;
