Create a function that takes a phrase and transforms each word using the following rules:

1.  Keep first and last character the same.
2.  Transform middle characters into a dash `-`.


### Examples ###
    partiallyHide("skies were pretty") ➞ "s---s w--e p----y"

    partiallyHide("red is not my color") ➞ "r-d is n-t my c---r"

    partiallyHide("She rolled her eyes") ➞ "S-e r----d h-r e--s"

    partiallyHide("Harry went to fight the basilisk") ➞ "H---y w--t to f---t t-e b------k"


### Notes ###
Words with two or fewer letters should not be hidden at all.