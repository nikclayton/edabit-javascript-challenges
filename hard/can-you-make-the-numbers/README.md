You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:

    can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])

Write a function that returns `true`if you can build the following numbers using only the digits you have.


### Examples ###
    canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]) ➞ true

    // You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
    // Using only these digits, you can build 123, 444, and 92

    canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]) ➞ false

    canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []) ➞ true

    canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3]) ➞ false


### Notes ###
N/A