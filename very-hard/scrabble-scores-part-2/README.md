This challenge is based on the game Scrabble. Each word you play is scored based on the point value of each tile/letter (see first table), as well as additional points conferred by any special squares your tiles land on (see second table).

Create a function that takes an array representing a row of squares in a Scrabble board, and a string representing the word to be played. The array will consist of `-`representing normal squares, and "DL", "TL", "DW" representing special squares. Return the index of the array where the first letter of the word should be placed to maximise the score of the word to be played. Return the lowest index, if several exist.

LetterPointsA1B3C3D2E1F4G2H4I1J8K5L2M3N1O1P3Q10R1S1T1U1V4W4X8Y4Z10

Special SquareMeaningDLDouble letter score - doubles the point value of a letter placed on the squareTLTriple letter score - triples the point value of a letter placed on the squareDWDouble word score - doubles the score of an entire word if one of its letters is placed on the square


### Examples ###
    bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quiz") ➞ 0
    // Doubling the entire word maximises the score. Starting at
    // indices 1,10, and 11 have the same effect, but the function
    // should return the lowest index.

    bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quit") ➞ 5
    // Tripling the first letter alone gives a higher score than
    // doubling the entire word, as the other 3 letters have
    // low point-values.

    bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quart") ➞ 9
    // Tripling the first (high-scoring) letter, and doubling the word.

    bestStart(["-","DW","-","-","-","TL","-","-","-","TL","-","-","-","DW","-"], "quartz") ➞ 0
    // Tripling the last (high-scoring) letter, and doubling the word.
    // Index 9 has the same effect (tripling the first letter, doubling
    // the word), but 0 is the lower index.


### Notes ###
N/A