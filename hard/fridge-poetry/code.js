function canBuild(s1, s2) {
  const string1 = s1.replace(/ /g, '');
  const string2 = s2.replace(/ /g, '');

  for (let i = 0; i < s1.length; i++) {
    if (!s1.includes(s2[i]))  {
      return false;
    }
  }

  return true;
}

module.exports = canBuild;
