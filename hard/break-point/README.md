A number has a **breakpoint**if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.

For instance, the number *35190*can be sliced between the digits *351*and *90*, since *3 + 5 + 1 = 9*and *9 + 0 = 9*. On the other hand, the number *555*does **not**have a **breakpoint**(you must split **between**digits).

Create a function that returns `true`if a number has a breakpoint, and `false`otherwise.


### Examples ###
    breakPoint(159780) ➞ true

    breakPoint(112) ➞ true

    breakPoint(1034) ➞ true

    breakPoint(10) ➞ false

    breakPoint(343)  ➞ false


### Notes ###
*   Read each digit as only one number.
*   Check the resources tab for a hint.