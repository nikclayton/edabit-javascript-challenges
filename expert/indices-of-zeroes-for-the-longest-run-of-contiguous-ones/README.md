You are given an **array of binary integers**and `k`, the **number of flips**allowed.

Write a function that returns the indices of zeroes of which, when flipped, return the **longest contiguous sequence of ones**.


### Examples ###
    zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1) ➞ [1]

    zeroIndices([1, 0, 0, 0, 0, 1], 1) ➞ [1]

    zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3) ➞ [6, 7, 9]

    zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3) ➞ [7, 8, 9]


### Notes ###
If multiple combinations of indices tie for longest one sequence, return the indices which occur **first**(see examples #2, #3).