Create a function that returns the indices of all occurrences of an item in the array.


### Examples ###
    getIndices(["a", "a", "b", "a", "b", "a"], "a") ➞ [0, 1, 3, 5]

    getIndices([1, 5, 5, 2, 7], 7) ➞ [4]

    getIndices([1, 5, 5, 2, 7], 5) ➞ [1, 2]

    getIndices([1, 5, 5, 2, 7], 8) ➞ []


### Notes ###
*   If an element does not exist in an array, return `[]`.
*   Arrays are zero-indexed.
*   Values in the array will be value-types (don't need to worry about nested arrays).