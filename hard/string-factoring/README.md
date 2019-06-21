Given the complete factorization of a number, create a function that converts this array of factors to a string.

To illustrate: 24's complete factorization is `[2, 2, 2, 3]`, which should be converted to `"2^3 x 3"`.


### Examples ###
    stringFactor([2, 2, 2, 3, 3]) ➞"2^3 x 3^2"

    stringFactor([2, 7]) ➞"2 x 7"

    stringFactor([2, 3, 3]) ➞"2 x 3^2"


### Notes ###
*   Factors should be joined with `x`(multiplication sign).
*   Multiple instances of the same factor should be exponentiated.
*   Factors raised to the 1 power should be left as is, i.e. write `7`instead of `7^1`.