function subset(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    } else {
      const index = arr2.indexOf(arr1[i])
      arr2.splice(index, 1)
    }
  }
  return true;
}

module.exports = subset;
