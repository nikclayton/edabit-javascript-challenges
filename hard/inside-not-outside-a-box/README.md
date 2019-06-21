Write a function that returns the number of **distinct items**inside a box. Do **not**count items outside the box.


### Examples ###
    count([
      "??????",
      "?####?",
      "?#&!#?",
      "@#^Z#?",
      "$####?"
    ]) ➞ 4

    count([
      "??????",
      "?####?",
      "?#ZZ#?",
      "@#ZZ#?",
      "$####?",
      "AAAAAA"
    ]) ➞ 1

    count([
      "AAAAA",
      "AAA##",
      "AAA##",
      "AAAAA",
      "AAAAA"
    ]) ➞ 0


### Notes ###
Return `0`if the box is empty or too small to fit anything.