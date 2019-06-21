Create a function that takes an array of words, scores the words based on the Scrabble scoring table below, and returns an array of the highest scoring words. The words on the resulting array should be in the same relative order as the original array.

LetterPointsA1B3C3D2E1F4G2H4I1J8K5L2M3N1O1P3Q10R1S1T1U1V4W4X8Y4Z10


### Examples ###
    bestWords(["got", "test", "oh", "sat", "rents"]) ➞ ["oh", "rents"]

    bestWords(["digest", "divest", "verge", "honey", "money"]) ➞ ["honey"]

    bestWords(["berry", "whiz", "laughed", "ghetto", "psychic"]) ➞ ["whiz", "psychic"]


### Notes ###
Input and output should both be arrays (see tests).