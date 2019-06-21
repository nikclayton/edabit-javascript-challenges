Create a function that takes an array and returns a string.

*   **0**Repeat the actual decrypted value (using like this : 014 to repeat 14 times).
    *   *Warning: When you start a repeat you can't stop it to add other numbers.*
*   **1, 2, 3, 4**= g, o, l, e
*   **5**Corresponding to up case of letter before this.
*   **6**Add a point to the end.
*   **7**Change case of the first letter.
*   **8**Reverse the string.
*   **9**Clear the actual decrypted string.


### Examples ###
    numToGoogle(["12213467"]) ➞ "Google."

    numToGoogle(["12213467", "321"]) ➞ "Google.log"

    numToGoogle(["12213467", "321", "122906"]) ➞ "Google.log"

    numToGoogle(["15", "2502", "15", 345]) ➞ "GOOGLE"

    numToGoogle(["15", "2502", "15", 35, 45]) ➞ "GOOGLE"

    numToGoogle([15, 202, 1, 3, 4]) ➞ "Google"


### Notes ###
N/A