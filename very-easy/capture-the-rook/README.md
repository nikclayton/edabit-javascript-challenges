Write a function that returns `true`if two rooks can attack each other, and `false`otherwise.


### Examples ###
    canCapture(["A8", "E8"]) ➞ true

    canCapture(["A1", "B2"]) ➞ false

    canCapture(["H4", "H3"]) ➞ true

    canCapture(["F5", "C8"]) ➞ false


### Notes ###
*   Assume no blocking pieces.
*   Two rooks can attack each other if they share the same row (letter) or column (number).