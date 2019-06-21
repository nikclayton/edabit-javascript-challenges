Suppose a hash `#`represents the backspace key being pressed. Write a function that transforms a string containing `#`into a string without any `#`.


### Examples ###
    erase("he##l#hel#llo") ➞ "hello"

    erase("major# spar##ks") ➞ "majo spks"

    erase("si###t boy") ➞ "t boy"

    erase("####") ➞ ""


### Notes ###
*   In addition to characters, backspaces can also remove whitespaces.
*   If the number of hashes exceeds the previous characters, remove those previous characters entirely (see example #3).
*   If there only exist backspaces, return an empty string (see example #4).