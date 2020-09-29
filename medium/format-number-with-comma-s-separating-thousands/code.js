function formatNum(num) {
  let number = (num + "").split("");
  console.log(number)
  for (let i = number.length - 1; i > 0; i - 3) {
    number.splice(i, ",");
  }
  const result = number.join("")
  return result;
}

module.exports = formatNum;
