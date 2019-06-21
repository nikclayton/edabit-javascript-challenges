Write a function that reverses the subarray between the start and end index (**inclusive**). The rest of the array should be kept the same.


### Examples ###
    rangedReversal([1, 2, 3, 4, 5, 6], 1, 3) ➞ [1, 4, 3, 2, 5, 6]

    rangedReversal([1, 2, 3, 4, 5, 6], 0, 4) ➞ [5, 4, 3, 2, 1, 6]

    rangedReversal([9, 8, 7, 4], 0, 0) ➞ [9, 8, 7, 4]


### Notes ###
*   Arrays will be zero-indexed.
*   The start and end indices will always be valid in context of the array.
*   The end index will always be greater than or equal to the starting index.
*   Return the array itself if the starting and ending index are the same.