A Pythagorean triple is a set of three integer numbers that form a right triangle. The sum of the squares of the two smaller numbers should equal the square of the largest number. Given three numbers a, b and c (c being the largest):

    a^2 + b^2 = c^2

Furthermore, a Pythagorean triple is said to be primitive if the three numbers are pairwise coprime — that is, the greatest common prime factor between any two numbers is 1.

Create a function that takes an array of three numbers (unordered) and returns `true`if the numbers constitute a primitive Pythagorean triple, `false`otherwise.


### Examples ###
    isPrimPythTriple([4, 5, 3]) ➞ true

    isPrimPythTriple([7, 12, 13]) ➞ false

    isPrimPythTriple([39, 15, 36]) ➞ false
    // Pythagorean triple, but not primitive.

    isPrimPythTriple([77, 36, 85]) ➞ true


### Notes ###
N/A