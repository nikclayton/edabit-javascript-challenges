function textToNumberBinary(str) {
  let binary = "";
  const words = str.split(" ")
  for (let i = 0; i < words.length; i++) {
    const match = words[i].toLowerCase();
    if (match === "zero") {
      binary += 0;
    } else if (match === "ten") {
      binary += 10;
    } else {
      binary += 1;
    }
  }
  console.log(binary, typeof(binary), binary.length)
  if (binary.length % 8 === 0) {
    return binary;
  } else {
    return "";
  }
}

module.exports = textToNumberBinary;
