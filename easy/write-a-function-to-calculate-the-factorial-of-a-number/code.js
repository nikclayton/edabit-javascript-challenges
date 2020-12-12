function factorial(x) {
  let total = 1;
  for (let i = 2; i < x; i++) {
    total *= i;
  }
}

module.exports = factorial;
