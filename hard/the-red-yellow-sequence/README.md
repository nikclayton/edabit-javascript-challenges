Write a function that takes a number `n`and a string `s`as arguments and returns the *n*th term of the Red/Yellow sequence. `s`will ask the function what to return, all, red or yellow.

![alt text](<https://edabit-challenges.s3.amazonaws.com/red_yellow_sequence.png> "Red/Yellow Sequence")


### Examples ###
    rySeq(2, "all") ➞ 5

    rySeq(3, "yellow") ➞ 8

    rySeq(28, "red") ➞ 55

    rySeq(1, "blue") ➞ false


### Notes ###
*   If `s`is not "all", "yellow" or "red", return `false`.
*   If `n`is 0, return `0`.
*   `n`is always a positive integer.