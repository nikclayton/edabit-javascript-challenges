Create a function that takes an integer and outputs an `n x n`square solely consisting of the integer `n`.


### Examples ###
    squarePatch(3) ➞ [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ]

    squarePatch(5) ➞ [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5]
    ]

    squarePatch(1) ➞ [
      [1]
    ]

    squarePatch(0) ➞ []


### Notes ###
*   `n >= 0`.
*   If `n = 0`, return an empty array.