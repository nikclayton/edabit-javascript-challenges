Create a function that returns `true`an input array can be completely sorted by only sorting within the bounds `[0, n]`(inclusive), where `n`is smaller than or equal to the array's length, and `false`otherwise.


### Examples ###
    boundSort([1, 6, 5, 3, 8, 9], [0, 3]) ➞ true
    // If [1, 6, 5, 3] is sorted to [1, 3, 5, 6], the array is completely sorted.

    boundSort([1, 6, 5, 3, 8, 9], [0, 2]) ➞ false
    // Even if [1, 6, 5] is sorted to [1, 5, 6], the array is still not completely sorted.

    boundSort([1, 9, 2, 5, 7], [0, 4]) ➞ true

    boundSort([1, 9, 2, 5, 7], [0, 3]) ➞ false
    // Sorting from [0, 3] gives us [1, 2, 5, 9, 7], array still not completely sorted.


### Notes ###
*   Numbers in array will be unique.
*   The lower index of the bound will always be `0`.