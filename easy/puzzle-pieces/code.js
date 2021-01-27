function puzzlePieces(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  const fit = a1[0] + a2[0];
  for (let i = 1; i < a1.length; i++) {
    const currentPiece = a1[i] + a2[i];
    if (fit !== currentPiece) {
      return false;
    }
  }
  return true;
}

module.exports = puzzlePieces;
