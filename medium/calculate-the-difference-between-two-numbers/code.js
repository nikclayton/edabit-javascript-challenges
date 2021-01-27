function percentDiff(num1, num2) {
  let difference = 0;
  if (num1 > num2) {
    difference = num1 - num2;
  } else {
    difference = num2 - num1;
  }
  const average = (num1 + num2) / 2
  const percent =  ((difference / average) * 100).toFixed(1);
  return (parseFloat(percent))
}

module.exports = percentDiff;
