You are playing a video game. Your screen can be represented as a 2D array, where `0`s represent **walkeable areas**and `1`s represent **unwalkeable areas**. You are currently searching for the entrance to a cave that is located on the right side of the screen. Your character starts anywhere in the leftmost column.

Create a function that determines if you can enter the cave. You can only move left, right, up, or down (not allowed to move diagonally).

To illustrate:

    [
      [0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0]
    ]

You found the entrance! Function should output `true`.

    [
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0]
    ]

Nope, keep looking. Function should output `false`.


### Examples ###
    canEnterCave([
      [0, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0]
    ]) ➞ false

    // You cannot walk diagonally!

    canEnterCave([
      [0, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0]
    ]) ➞ true

    canEnterCave([
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 0, 0, 1, 1, 0]
    ]) ➞ false


### Notes ###
*   You are seeing the game screen from a birds-eye view.
*   Another way of thinking about it: You can enter the cave if you can move from the **left**side of the screen to the **right**side by only walking up, down or right.