function factorial(x) {
  let total = 1;
  for (let i = 2; i < x; i++) {
    total *= i;
  }

  return total;
}

module.exports = factorial;
