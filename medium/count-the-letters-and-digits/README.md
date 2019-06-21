Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.


### Examples ###
    countAll("Hello World") ➞ {"LETTERS":  10, "DIGITS": 0}

    countAll("H3ll0 Wor1d") ➞ {"LETTERS":  7, "DIGITS": 3}

    countAll("149990") ➞ {"LETTERS": 0, "DIGITS": 6}


### Notes ###
*   Tests contain only alphanumeric characters.
*   Spaces are not letters.
*   All tests contain valid strings.