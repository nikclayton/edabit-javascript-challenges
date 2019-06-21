Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is 'sentence', reverse the order of the words in the string, while keeping the words intact.


### Examples ###
    str1 = "Hello"
    str2 = "There's never enough time to do all the nothing you want"

    flip(str1, "word") ➞ "olleH"

    flip(str1, "sentence") ➞ "Hello"

    flip(str2, "word") ➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"

    flip(str2, "sentence") ➞ "want you nothing the all do to time enough never There's"


### Notes ###
N/A