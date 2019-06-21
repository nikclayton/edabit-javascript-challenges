Let's update our previous **word-chain**definition. In this 2.0 version, a **word-chain**is an array of words, where the next word is formed by either:

1.  Changing exactly **one**letter from the previous word.
2.  Adding or subtracting **one**letter.


### Examples ###
    isWordChain(["row", "crow", "crown", "brown", "brawn"]) ➞ true
    // add "c" to "row" to get "crow", "n" to get "crown", etc.

    isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) ➞ true

    isWordChain(["meek", "meet", "meat", "teal"]) ➞ false
    // "meat" => "teal" changes 2 letters (can only change 1).

    isWordChain(["run", "runny", "bunny"]) ➞ false
    // "run" => "runny" adds 2 letters (can only add 1).


### Notes ###
*   You can only do one (not both) for each word change.
*   All words will be in lower-case.