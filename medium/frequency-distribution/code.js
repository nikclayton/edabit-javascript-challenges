function getFrequencies(arr) {
  const obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj.hasOwnProperty(arr[i])) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}
return obj;
}

module.exports = getFrequencies;
