Write a function that returns `true`if there exists a row that is identical to a column in a 2-D matrix.

To illustrate:

    [
      [1, 2, 3, 4],
      [2, 4, 9, 8],
      [5, 9, 7, 7],
      [6, 8, 1, 0]
    ]

    // 2nd row + 2nd column are identical: [2, 4, 9, 8]


### Examples ###
    hasIdentical([
      [4, 4, 4, 4],
      [2, 4, 9, 8],
      [5, 4, 7, 7],
      [6, 4, 1, 0]
    ]) ➞ true

    hasIdentical([
      [4, 4, 9, 4],
      [2, 1, 9, 8],
      [5, 4, 7, 7],
      [6, 4, 1, 0]
    ]) ➞ false

    hasIdentical([
      [4, 4]
      [2, 1]
    ]) ➞ false

    hasIdentical([
      [4, 2]
      [2, 1]
    ]) ➞ true


### Notes ###
Non-square matrices should be `false`.