N-bonacci numbers are generalisations of the fibonacci sequence, where the next term is always the sum of the previous N terms. By convention, the first (N-1) terms are all 0 and the Nth term is 1.

The initial 10 terms of the first 5 N-bonacci sequences are therefore:

*   1-bonacci = 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ...
*   2-bonacci = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*   3-bonacci = 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, ...
*   4-bonaaci = 0, 0, 0, 1, 1, 2, 4, 8, 15, 29, ...
*   5-bonacci = 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, ...

Write a function that returns the kth term of the N-bonacci sequence, for two integer arguments N and k.


### Examples ###
    bonacci(1, 10) ➞ 1

    bonacci(2, 10) ➞ 34

    bonacci(3, 10) ➞ 44

    bonacci(4, 10) ➞ 29

    bonacci(5, 10) ➞ 16


### Notes ###
N/A