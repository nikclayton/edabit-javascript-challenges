Create a function that takes **a character from a to h**as the column number and **an integer from 1 to 8**as the row number which together represent the location of a queen on a normal-sized chess board. Return this two dimensional 8x8 array.

This array must consist of zeroes and ones. The ones are placed in positions where the queen can move in one move and zeroes represent positions on the board where it cannot.


### Examples ###
    checkBoard("a", 1) ➞ [
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1]
    ]

    checkBoard("h", 4) ➞ [
      [0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 1]
    ]

    checkBoard("c", 8) ➞ [
      [1, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0]
    ]


### Notes ###
The queens' current position is a zero as it is impossible to move to this position during one turn, because the queen is already there.