function factorial(int) {
  let total = 1;
  for (let i = 1; i < int; i++) {
    total *= i;
  }
  return total;
}

module.exports = factorial;
