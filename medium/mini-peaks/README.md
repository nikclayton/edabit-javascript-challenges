Write a function that returns all the elements in an array that are **strictly greater**than their adjacent left and right neighbors.


### Examples ###
    miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]

    miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]

    miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []


### Notes ###
*   Do not count boundary numbers, since they only have **one**left/right neighbor.
*   If no such numbers exist, return an empty array.