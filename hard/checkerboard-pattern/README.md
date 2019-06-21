Create a function that returns `true`if the two-dimensional `n x n`input array has a **checker-board pattern**.


### Examples ###
    isCheckerboard([
      [1, 1],
      [0, 1]
    ]) ➞ false

    isCheckerboard([
      [0, 1],
      [1, 0]
    ]) ➞ true

    isCheckerboard([
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 1, 1]
    ]) ➞ false

    isCheckerboard([
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1]
    ]) ➞ true


### Notes ###
*   An element in the array adheres to the checker-board pattern if the elements directly to the left, right, top and below are of a different type, and the elements on the diagonal direction are of the same type.
*   The element in the upper-left corner can be either `0`or `1`.