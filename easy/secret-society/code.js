function societyName(friends) {
  let name = "";
  for (let i  = 0; i < friends.length; i++) {
    name += friends[i][0];
  }
  return name;
}

module.exports = societyName;
