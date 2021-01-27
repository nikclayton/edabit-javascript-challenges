function changeEnough(change, amountDue) {
  let totalChange = 0;
  for (let i = 0; i < change.length; i++) {
    if (i === 0) {
      totalChange += change[i] * .25;
    } else if (i === 1) {
      totalChange += change[i] * .10;
    } else if (i === 2) {
      totalChange += change[i] * .05;
    } else {
      totalChange += change[i] *  .01;
    }
  }
  if  (totalChange >= amountDue) {
    return true;
  } else {
    return false;
  }
}

module.exports = changeEnough;
