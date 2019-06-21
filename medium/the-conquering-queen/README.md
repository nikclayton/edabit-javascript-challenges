In chess, queens can move any number of squares horizontally, vertically or diagonally.

Given the location of your queen and your opponents' queen, determine whether or not you're able to capture your opponent's queen. Your location and your opponents' location are the first and second elements of the array, respectively.


### Examples ###
    canCapture(["A1", "H8"]) ➞ true
    // Your queen can move diagonally to capture opponents' piece.

    canCapture(["A1", "C2"]) ➞ false
    // Your queen cannot reach C2 from A1 (although a knight could).

    canCapture(["G3", "E5"]) ➞ true


### Notes ###
Assume there are no blocking pieces.