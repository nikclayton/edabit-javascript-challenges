Create a function that filters out an array of state names into two categories based on the second parameter.

1.  Abbreviations `abb`
2.  Full names `full`


### Examples ###
    filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
    ➞ ["CA", "NY"]

    filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
    ➞ ["Arizona", "Nevada"]

    filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
    ➞ ["MT", "NJ", "TX", "ID", "IL"]

    filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
    ➞ []


### Notes ###
N/A