Create a function that takes an array and returns an array of the accumulating product.


### Examples ###
    accumulatingProduct([1, 2, 3, 4]) ➞ [1, 2, 6, 24]
    // [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]

    accumulatingProduct([1, 5, 7]) ➞ [1, 5, 35]

    accumulatingProduct([1, 0, 1, 0]) ➞ [1, 0, 0, 0]

    accumulatingProduct([]) ➞ []


### Notes ###
An empty array should return an empty array `[]`.