A **no-intersecting ones matrix**is one where no two ones exist on the same row or column.

To illustrate:

    [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ]

The array below is **not**a non-intersecting ones matrix:

    [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]

    // Column 2 has two 1s.

Write a function that returns `true`if a 2D matrix is a **no-intersecting ones matrix**and false otherwise.


### Examples ###
    noIntersectingOnes([
      [0, 1],
      [1, 0]
    ]) ➞ true

    noIntersectingOnes([
      [1, 1],
      [0, 0]
    ]) ➞ false

    noIntersectingOnes([
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 1, 0, 0]
    ]) ➞ true


### Notes ###
N/A