function flash([num1, op, num2]) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      if(num2 === 0) {
        return undefined;
      }
      return parseFloat((num1 / num2).toFixed(2));
    default:
      return undefined;
  }
}

module.exports = flash;
