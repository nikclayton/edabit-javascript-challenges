Given a tic-tac-toe board, create a function that determines whether X won, O won, or there's a tie.

The board is represented as a 2-dimensional array. A board does not have to be completely filled. Blank squares are represented with the letter "B". For each board, X begins and O goes second.


### Examples ###
    whoWon([
      ["X", "O", "B"],
      ["B", "X", "O"],
      ["B", "B", "X"]
    ])

    ➞ "X"

    whoWon([
      ["X", "O", "X"],
      ["O", "X", "B"],
      ["X", "B", "O"]
    ])

    ➞ "X"

    whoWon([
      ["X", "X", "O"],
      ["O", "O", "X"],
      ["X", "X", "O"]
    ])

    ➞ "Tie"


### Notes ###
N/A