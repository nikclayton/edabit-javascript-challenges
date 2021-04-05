function getPrices(arr) {
  const prices = [];
  for (let i = 0; i < arr.length; i++) {
    prices.push(arr[i].match(/\(([^)]+)\)/)[1])
  }

  return prices;
}

module.exports = getPrices;
