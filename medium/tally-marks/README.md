Create a function that can convert from **normal notation**to **tally-mark notation**and vice versa. In tally-mark notation, a number can be decomposed as the sum of `5`s + `remainder`.

The function will look like this: `switchNotation([current scores], desired notation)`

    Ex.1 Normal: 3, 24, 4, 9
    Ex.1 Tally: 3, 55554, 4, 54

    Ex.2 Normal: 2, 12, 2, 4
    Ex.2 Tally: 2, 552, 2, 4


### Examples ###
    switchNotation([51], "normal") ➞ [6]

    switchNotation([3, 55, 55551], "normal") ➞ [3, 10, 21]

    switchNotation([15, 29, 5, 3], "tally") ➞ [555, 555554, 5, 3]


### Notes ###
N/A