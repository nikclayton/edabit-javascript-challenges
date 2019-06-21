Create a function that, given an array of string arrays, returns an array of all combinations as concatenated strings.

1.  The function is called with an array of arrays containing strings.
2.  The task is to combine each string of each array with each string of each other array.
3.  If one of the string arrays is empty, the function will return an empty array.

The function will accept an optional second string parameter. This parameter, if specified, is to be used to combine two strings.


### Examples ###
    combinator([["a", "b"], ["c", "d"]]) ➞ ["ac", "ad", "bc", "bd"]

    combinator([["foo", "bar"], ["baz", "bamboo"]], " ") ➞ ["foo baz", "foo bamboo", "bar baz", "bar bamboo"]

    combinator([[]]) ➞ []


### Notes ###
*   The order of the given strings must be retained in the combinations.
*   You can assume that:
    *   The function is always called with an array of string arrays and that.
    *   The string arrays can be empty.