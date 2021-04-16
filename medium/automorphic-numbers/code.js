function isAutomorphic(n) {
  const nString = "" + n;
  const nLength = nString.length
  const nSquared = n * n;
  const nSquaredString = "" + nSquared;
  const endPoint = nSquaredString.length-nLength;
  const compare = nSquaredString.substr(endPoint, nLength)
  if (parseInt(compare) === n) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAutomorphic;
