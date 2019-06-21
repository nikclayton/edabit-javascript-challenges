Create a function that decomposes an address string into an array of five substrings:

1.  Street Number
2.  Street Name
3.  City Name
4.  State
5.  Zip Code


### Examples ###
    decomposeAddress("557 Farmer Rd Corner, MT 59105")
    ➞ ["557", "Farmer Rd", "Corner", "MT", "59105"]

    decomposeAddress("3315 Vanity St Beverly Hills, CA 90210")
    ➞ ["3315", "Vanity St", "Beverly Hills", "CA", "90210"]

    decomposeAddress("8919 Scarecrow Ct Idaho Falls, ID 80193")
    ➞ ["8919", "Scarecrow Ct", "Idaho Falls", "ID", "80193"]


### Notes ###
All street extensions will be shortened to two-letter formats.