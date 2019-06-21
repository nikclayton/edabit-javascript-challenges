Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.


### Examples ###
    toCamelCase("A-B-C") ➞ "ABC"

    toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"


### Notes ###
An empty string as input `""`should return an empty string.