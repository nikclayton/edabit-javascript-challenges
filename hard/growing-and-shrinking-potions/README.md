There are two types of potions:

1.  **Growing potion**: `"A"`
2.  **Shrinking potion**: `"B"`

*   If `"A"`immediately follows a **digit**, add 1 to the digit.
*   If `"B"`immediately follows a **digit**, subtract 1 from the digit.

Create a function that returns a string according to these rules, removing the potions once they've been consumed.


### Examples ###
    afterPotion("3A78B51") ➞ "47751"
    // 3 grows to 4, 8 shrinks to 7

    afterPotion("9999B") ➞ "9998"

    afterPotion("9A123") ➞ "10123"

    afterPotion("567") ➞ "567"


### Notes ###
*   Digits that do not have a potion on their immediate right should be left alone.
*   A digit will always either be followed by **zero**or **exactly 1 potion**.