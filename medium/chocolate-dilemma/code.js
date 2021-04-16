function testFairness(agatha, bertha) {
  let agathaChoco = 0;
  let berthaChoco = 0;
  for (let i = 0; i < agatha.length; i++) {
    agathaChoco += agatha[i][0] * agatha[i][1];
  }
  for (let i = 0; i < bertha.length; i++) {
    berthaChoco += bertha[i][0] * bertha[i][1];
  }

  if (agathaChoco === berthaChoco) {
    return true;
  } else {
    return false;
  }
}

module.exports = testFairness;
