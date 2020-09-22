function digitDistance(num1, num2) {
  const str1 = num1 + "";
  const str2 = num2 + "";
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    let difference = parseInt(str1[i]) - parseInt(str2[i]);
    if (difference < 0) {
      difference *= -1;
    }
    distance += difference;
  }
  return distance;
}

module.exports = digitDistance;
