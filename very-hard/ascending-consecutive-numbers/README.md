Write a function that returns `true`if a string consists of **ascending consecutive numbers**.


### Examples ###
    ascending("232425") ➞ true

    ascending("2324256") ➞ false
    // No matter how this string is divided, the numbers are not consecutive.

    ascending("444445") ➞ true
    // Consecutive numbers 444 and 445.


### Notes ###
A **number**can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.