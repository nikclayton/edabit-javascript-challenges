Write a function that filters out factorials from an array. A factorial is a number that can be represented in the following manner:

    n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

Recursively, this can be represented as:

    n! = n * (n-1)!


### Examples ###
    filterFactorials([1, 2, 3, 4, 5, 6, 7]) ➞ [1, 2, 6]

    filterFactorials([1, 4, 120]) ➞ [1, 120]

    filterFactorials([8, 9, 10]) ➞ []


### Notes ###
N/A