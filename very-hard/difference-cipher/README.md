It's time to send and receive secret messages.

Create a single function that takes a number **or**an array as an argument and returns a coded or decoded message.

The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: e.g. `A`+3 --> `C`or `z`-1 --> `y`.


### Examples ###
    difCiph("Hello") ➞ [72, 29, 7, 0, 3]
    // H = 72, the difference between the H and e is 29 (upper- and lowercase).
    // The difference between the two l's is obviously 0.

    difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"

    difCiph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]


### Notes ###
The input of the function will always be a string **or**an array with numbers.