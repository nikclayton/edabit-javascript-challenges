Create a function that checks if the box is completely filled with the asterisk symbol `*`.


### Examples ###
    completelyFilled([
      "#####",
      "#***#",
      "#***#",
      "#***#",
      "#####"
    ]) ➞ true

    completelyFilled([
      "#####",
      "#* *#",
      "#***#",
      "#***#",
      "#####"
    ]) ➞ false

    completelyFilled([
      "###",
      "#*#",
      "###
    ]) ➞ true

    completelyFilled([
      "##",
      "##"
    ]) ➞ true


### Notes ###
Boxes of size `n <= 2`are considered automatically filled (see example #4).