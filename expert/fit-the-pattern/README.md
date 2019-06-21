Create a function that checks if the sub-arrays in an array adhere to the specified pattern.


### Examples ###
    checkPattern([[1, 1], [2, 2], [1, 1], [2, 2]], "ABAB") ➞ true

    checkPattern([[1, 2], [1, 3], [1, 4], [1, 2]], "ABCA") ➞ true

    checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], "AABB") ➞ true

    checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "ABCD") ➞ true

    checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "DCBA") ➞ true


### Notes ###
*   The length of the pattern will always be the same as the length of the (main) array.
*   The pattern does not necessarily have to be alphabetically ordered (see last example).