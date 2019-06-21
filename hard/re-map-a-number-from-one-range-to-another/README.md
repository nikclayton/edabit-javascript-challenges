Create a function similar to Processings "map" function (see resources tab), in which a value and it's range is taken and remapped to a new range.

The function takes 5 numbers:

*   Value: `value`
*   Range: `low1`and `high1`
*   Range: `low2`and `high2`


### Examples ###
    remap(7, 2, 12, 0, 100) ➞ 50

    remap(17, 5, 55, 100, 30) ➞ 83.2

    remap(50, 1, 51, 0, 100) ➞ 98


### Notes ###
*   Your test input will always be numbers.
*   If the input range is `0`, return `0`.