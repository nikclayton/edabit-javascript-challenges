Write a function that returns `true`if the knights are placed on a chessboard such that **no knight can capture another knight**. Here, `0`s represent empty squares and `1`s represent knights.


### Examples ###
    cannotCapture([
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0]
    ]) ➞ true

    cannotCapture([
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0, 1, 0, 1]
    ]) ➞ false


### Notes ###
*   Knights can be present in any of the 64 squares.
*   No other pieces except knights exist.