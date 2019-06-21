Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.


### Examples ###
    doesTriangleFit([1, 2, 3], [1, 2, 3]) ➞ true

    doesTriangleFit([1, 2, 3], [3, 2, 1]) ➞ true

    doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

    doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false


### Notes ###
*   Triangle fits if it has the same or smaller size as the hole.
*   The function should return `false`if the triangle with that dimensions is not possible.