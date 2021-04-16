function numberOfDays(coordinate) {
  let days = 0;
  let daysTaken = 0;
  for (let i = 0; i < coordinate.length; i++) {
    if (coordinate[i] !== 0) {
      if (days === 5) {
        days = 0;
        continue;
      }

      days++
    }
  }
  return daysTaken;
}

module.exports = numberOfDays;
