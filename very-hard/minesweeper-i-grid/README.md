This challenge is based on the game Minesweeper.

Create a function that takes an array of `#`and `-`, where each hash (#) represents a mine and each dash (-) represents a mine-free spot. Return an array where each dash is replaced by a digit indicating the number of mines immediately adjacent to the spot (horizontally, vertically, and diagonally).


### Examples ###
    numGrid([
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "#", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"]
    ]) ➞ [
      ["0", "0", "0", "0", "0"],
      ["0", "1", "1", "1", "0"],
      ["0", "1", "#", "1", "0"],
      ["0", "1", "1", "1", "0"],
      ["0", "0", "0", "0", "0"],
    ]

    numGrid([
      ["-", "-", "-", "-", "#"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "#", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["#", "-", "-", "-", "-"]
    ]) ➞ [
      ["0", "0", "0", "1", "#"],
      ["0", "1", "1", "2", "1"],
      ["0", "1", "#", "1", "0"],
      ["1", "2", "1", "1", "0"],
      ["#", "1", "0", "0", "0"]
    ]

    numGrid([
      ["-", "-", "-", "#", "#"],
      ["-", "#", "-", "-", "-"],
      ["-", "-", "#", "-", "-"],
      ["-", "#", "#", "-", "-"],
      ["-", "-", "-", "-", "-"]
    ]) ➞ [
      ["1", "1", "2", "#", "#"],
      ["1", "#", "3", "3", "2"],
      ["2", "4", "#", "2", "0"],
      ["1", "#", "#", "2", "0"],
      ["1", "2", "2", "1", "0"],
    ]


### Notes ###
N/A