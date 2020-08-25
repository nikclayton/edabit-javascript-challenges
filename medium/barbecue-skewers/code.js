function bbqSkewers(grill) {
  let veggie = 0;
  let nonVeggie = 0;
  const portions = [];
  for (let i = 0; i < grill.length; i ++) {
    if (!grill[i].includes("x")) {
      veggie++;
    } else {
      nonVeggie++;
    }
  }
  portions.push(veggie);
  portions.push(nonVeggie);
  return portions;
}

module.exports = bbqSkewers;
