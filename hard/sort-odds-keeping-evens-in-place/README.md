Write a function that sorts **only the odd numbers**in an array in **ascending order**, keeping the even numbers in their current place.

For example, if our input array is: `[5, 2, 6, 6, 1, 4, 9, 3]`:

    [_, 2, 6, 6, _, 4, _, _]  // keep evens in place.

    // Sort odds: [5, 1, 9, 3] => [1, 3, 5, 9]

    [1, 2, 6, 6, 3, 4, 5, 9]  // final array.


### Examples ###
    oddSort([7, 5, 2, 3, 1]) ➞ [1, 3, 2, 5, 7]

    oddSort([3, 7, 0, 9, 3, 2, 4, 8]) ➞ [3, 3, 0, 7, 9, 2, 4, 8]

    oddSort([2, 2, 8, 4]) ➞ [2, 2, 8, 4]

    oddSort([7, 9, 7]) ➞ [7, 7, 9]


### Notes ###
Arrays may contain duplicate numbers.