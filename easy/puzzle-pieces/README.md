Write a function that returns `true`if two arrays sum up to a constant array.


### Examples ###
    puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
    // Both arrays sum to [5, 5, 5, 5]

    puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

    puzzlePieces([1, 2], [-1, -1]) ➞ false

    puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false


### Notes ###
*   Each array will have at least one element.
*   Return `false`if both arrays are of different length.