You are given an array of `0`s and `1`s, like the one below:

    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1]

    // The first element, a 0, and the last element, a 1 are both unhappy.
    // The second element, a 1 is unhappy.
    // The second-to-last element, a 0 is unhappy.
    // All other numbers in this array are happy.

A `1`is **unhappy**if the digit to its left and the digit to its right are both 0s. A `0`is **unhappy**if the digit to its left and the digit to its right are both 1s. If a number has only one neighbor, it is **unhappy**if its only neighbor is different. Otherwise, a number is **happy**.

Write a function that takes in an array of `0`s and `1`s and outputs the **percentage of numbers which are happy**. The total percentage of numbers which are happy can be represented as:

    % of happy 0s = (# happy 0s + # unhappy 0s) / # total 0s
    % of happy 1s = (# happy 1s + # unhappy 1s) / # total 1s
    percentage of happy numbers = (% of happy 0s + % of happy 1s) / 2

In the example above, `0.6`is the number of happy numbers.


### Examples ###
    percentageHappy([0, 1, 0, 1, 0]) ➞ 0

    percentageHappy([0, 1, 1, 0]) ➞ 0.5

    percentageHappy([0, 0, 0, 1, 1]) ➞ 1

    percentageHappy([1, 0, 0, 1, 1]) ➞ 0.8


### Notes ###
*   Remember: a `0`border number is unhappy if its only neighbor is a `1`and vice versa.
*   An array will contain at least two elements.