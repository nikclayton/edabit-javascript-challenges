function shortestDistance(str) {
  const arr = str.split(",");
  for(let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  const xDiffer = arr[2] - arr[0];
  const yDiffer  = arr[3] - arr[1];

  const differ = xDiffer * xDiffer + yDiffer * yDiffer;

  return parseFloat(Math.sqrt(differ).toFixed(2));
}

module.exports = shortestDistance;
