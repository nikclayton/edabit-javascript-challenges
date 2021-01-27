function birdCode(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const birdName = arr[i].replace("-", " ").split(" ");
    if (birdName.length === 1) {
      newArray.push(birdName[0].substr(0, 4).toUpperCase());
    } else if (birdName.length === 2) {
      const birdAbbrev = birdName[0].substr(0, 2) + birdName[1].substr(0, 2);
      newArray.push(birdAbbrev.toUpperCase());
    } else if (birdName.length === 3) {
      const birdAbbrev = birdName[0].substr(0, 1) + birdName[1].substr(0, 1) +
        birdName[2].substr(0, 2);
      newArray.push(birdAbbrev.toUpperCase());
    } else if (birdName.length === 4) {
      const birdAbbrev = birdName[0].substr(0, 1) + birdName[1].substr(0, 1) +
        birdName[2].substr(0, 1) + birdName[3].substr(0, 1);
      newArray.push(birdAbbrev.toUpperCase());
    }
  }
  return newArray;
}

module.exports = birdCode;
