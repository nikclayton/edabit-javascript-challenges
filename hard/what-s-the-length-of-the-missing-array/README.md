Create a function that takes an array of arrays and return the length of the missing array.


### Examples ###
    findMissing([[1], [1, 2], [4, 5, 1, 1], [5, 6, 7, 8, 9]]) ➞ 3

    findMissing([[5, 6, 7, 8, 9], [1, 2], [4, 5, 1, 1], [1]]) ➞ 3

    findMissing([[4, 4, 4, 4], [1], [3, 3, 3]]) ➞ 2


### Notes ###
*   Test input arrays won't always be sorted in order of length.
*   If the array of arrays is `null`or empty, your function should return `false`.
*   If an array within the parent array is `null`or empty, return `false`.
*   There will always be a missing element and its length will be between the given arrays.