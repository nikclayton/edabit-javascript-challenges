function overTwentyOne(cards) {
  let sum = 0;
  let hasAce = false;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === "J" || cards[i] === "Q" || cards[i] === "K") {
      sum += 10;
    } else if (cards[i] === "A") {
      hasAce = true;
    } else  {
      sum += cards[i];
    }
  }
  if(hasAce) {
    if ((sum + 11) > 21) {
      sum += 1;
    } else {
      sum +=11;
    }
  }
  if (sum > 21) {
    return true;
  }
  return false;
}

module.exports = overTwentyOne;
