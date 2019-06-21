Write a function that accepts a string and an `n`and returns a cipher by rolling each character forward (`n > 0`) or backward (`n < 0`) **n**times.

Note: Think of the letters as a connected loop, so rolling `a`backwards once will yield `z`, and rolling `z`forward once will yield `a`. If you roll 26 times in either direction, you should end up back where you started.


### Examples ###
    rollingCipher("abcd", 1) ➞ "bcde"

    rollingCipher("abcd", -1) ➞ "zabc"

    rollingCipher("abcd", 3) ➞ "defg"

    rollingCipher("abcd", 26) ➞ "abcd"


### Notes ###
*   All letters are lower cased.
*   No spacing.
*   Each character is rotated the same number of times.