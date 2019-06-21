Write a function that takes a string of brackets and checks whether they're balanced or not.

The sequence is balanced if:

*   It contains no unmatched brackets.
*   The subset of brackets enclosed within the confines of a matched pair of brackets is also balanced.


### Examples ###
    isBalanced("{[()]}") ➞ true

    isBalanced("[()]{}") ➞ true

    isBalanced("{[([)]]}") ➞ false


### Notes ###
Return `undefined`if no input is given.