An **ice cream sandwich**is a string that is formed by two identical ends and a different middle.


### Some examples of ice cream sandwiches: ###
    "AABBBAA"

    "3&&3"

    "yyyyymmmmmmmmyyyyy"

    "hhhhhhhhmhhhhhhhh"

Notice how **left**and **right**ends of the sandwich are identical in both **length**and in **repeating character**. The **middle**section is distinctly different.


### Not ice cream sandwiches: ###
    "BBBBB"
    // You can't have just plain icecream.

    "AAACCCAA"
    // You can't have unequal sandwich ends.

    "AACDCAA"
    // You can't have more than one filling.

    "A"
    // You can't have fewer than 3 characters.

Write a function that returns `true`if a string is an **ice cream sandwich**and `false`otherwise.


### Examples ###
    isIcecreamSandwich("CDC") ➞ true

    isIcecreamSandwich("AAABB") ➞ false

    isIcecreamSandwich("AA") ➞ false


### Notes ###
An ice cream sandwich must have a **minimum length of 3 characters**, and at least **two of these characters must be distinct**(you can't only have the filling!).