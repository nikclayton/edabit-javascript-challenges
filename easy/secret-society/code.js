function societyName(friends) {
  let name = "";
  const initals = [];
  for (let i  = 0; i < friends.length; i++) {
    initals.push(friends[i][0]);
  }
  initals.sort();

  for (let i = 0; i < initals.length; i++) {
    name += initals[i]
  }

  return name;
}

module.exports = societyName;
