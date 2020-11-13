function joinPath(portion1, portion2) {
  if (portion1[portion1.length - 1] === "/" && portion2[0] === "/") {
    return portion1.substr(0,  portion1.length - 1) + portion2;
  } else if (portion1[portion1.length - 1] === "/" || portion2[0] === "/") {
    return portion1 + portion2;
  } else {
    return portion1 + "/" + portion2;
  }
}

module.exports = joinPath;
