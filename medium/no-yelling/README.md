Create a function that transforms sentences ending with multiple question marks `?`or exclamation marks `!`into a sentence only ending with one.


### Examples ###
    noYelling("What went wrong?????????")  ➞ "What went wrong?"

    noYelling("Oh my goodness!!!")  ➞ "Oh my goodness!"

    noYelling("I just!!! can!!! not!!! believe!!! it!!!")  ➞ "I just!!! can!!! not!!! believe!!! it!"
    // Only change repeating punctuation at the end of the sentence.

    noYelling("Oh my goodness!")  ➞ "Oh my goodness!"
    // Do not change sentences where there exists only one or zero exclamation marks/question marks.

    noYelling("I just cannot believe it.")  ➞ "I just cannot believe it."


### Notes ###
*   Only change **ending punctuation**- keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
*   Don't worry about mixed punctuation (no cases that end in something like `?!??!`).
*   Keep sentences that do not have question/exclamation marks the same.