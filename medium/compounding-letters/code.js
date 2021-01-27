function accum(str) {
  const arr = str.split("");
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    for( let k = 0; k <= i; k++) {
      if ( k === 0) {
        word += arr[i].toUpperCase();
      } else {
        word += arr[i].toLowerCase();
      }
    }
    if(i !== arr.length - 1) {
      word += "-"
    }
  }
  return word;
}

module.exports = accum;
