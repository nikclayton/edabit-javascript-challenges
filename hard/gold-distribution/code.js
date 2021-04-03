function piratesKilled(gold, tolerance) {
  let max = 0;
  for (let i = 0; i < gold.length; i++) {
    if (max < gold[i])  {
      max = gold[i]
    }
  }
  for (let i = 0; i < gold.length; i++) {
    console.log(tolerance[i], (max - gold[i]))
    if (tolerance[i] <= (max - gold[i])) {
      return true;
    }
  }
  console.log(max);
  return false;
}

module.exports = piratesKilled;
