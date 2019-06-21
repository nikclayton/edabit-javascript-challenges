Create a function that accepts a string as an argument and returns the first non-repeated character.


### Examples ###
    firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"

    firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"

    firstNonRepeatedCharacter("g") ➞ "g"

    firstNonRepeatedCharacter("") ➞ false

    firstNonRepeatedCharacter("hheelloo") ➞ false


### Notes ###
*   An empty string should return `false`.
*   If every character repeats, return `false`.
*   Don't worry about case sensitivity or non-alphanumeric characters.