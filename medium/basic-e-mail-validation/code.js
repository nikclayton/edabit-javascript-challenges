function validateEmail(str) {
  const dotCom = str.substring(str.length - 4, str.length);
    if (!str.includes("@")) {
      return false;
    }
    if (str[0] === "@") {
      return false;
    }
    if (dotCom !== ".com") {
      return false;
    }
    return true;
}

module.exports = validateEmail;
