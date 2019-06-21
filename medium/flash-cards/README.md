Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

There are 4 operators: `+`(addition), `-`(subtraction), `x`(multiplication), and `/`(division). If the flashcard displays a number being divided by zero, e.g. `[3, "/", 0]`, then return `undefined`. For division, round to the hundredths place. So `[10, "/", 3]`should return `3.33`.


### Examples ###
    flash([3, "x", 7]) ➞ 21

    flash([5, "+", 7]) ➞ 12

    flash([10, "-", 9]) ➞ 1

    flash([10, "/", 0]) ➞ undefined

    flash([10, "/", 3]) ➞ 3.33


### Notes ###
Flash cards contain only zero or positive numbers.