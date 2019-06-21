Write a function that returns `true`if it's possible to build a phrase (`p1`) using only the characters from another phrase (`p2`). The function looks like: `canBuild(p1, p2)`.


### Examples ###
    canBuild("got 2 go", "gogogo 2 today") ➞ true

    canBuild("sit on top", "its a moo point") ➞ true

    canBuild("long high add or", "highway road go long") ➞ false

    canBuild("fill tuck mid", "truck falls dim") ➞ false


### Notes ###
*   All letters will be in lower case.
*   Numbers and special characters included.
*   Ignore whitespaces.
*   Do not count white space as a character.