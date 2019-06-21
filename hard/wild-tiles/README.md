Write a function that returns `true`if it is possible to build a string with a particular scrabble hand.


### Examples ###
    canBuild("quavers", ["S", "U", "Q", "V", "A", "#", "#"]) ➞ true

    canBuild("move", ["M", "U", "T", "V", "E", "J", "#"]) ➞ true

    canBuild("move", ["M", "U", "T", "V", "E", "J", "S"]) ➞ false

    canBuild("sharp", ["S", "K", "H", "#", "#", "F", "F"]) ➞ false


### Notes ###
Hashtags `"#"`represent wild tiles.