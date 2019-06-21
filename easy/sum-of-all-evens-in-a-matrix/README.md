Create a function that returns the sum of all even elements in a 2D matrix.


### Examples ###
    sumOfEvens([
      [1, 0, 2],
      [5, 5, 7],
      [9, 4, 3]
    ]) ➞ 6

    // 2 + 4 = 6

    sumOfEvens([
      [1, 1],
      [1, 1]
    ]) ➞ 0

    sumOfEvens([
      [42, 9],
      [16, 8]
    ]) ➞ 66

    sumOfEvens([
      [],
      [],
      []
    ]) ➞ 0


### Notes ###
*   Submatrices will be of equal length.
*   Return 0 if the 2D matrix only consists of empty submatrices.