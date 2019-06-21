Write a function that returns the closest palindrome number to an integer. If two palindrome numbers tie in absolute distance, return the **smaller number**.


### Examples ###
    closestPalindrome(887) ➞ 888

    closestPalindrome(100) ➞ 99
    // 99 and 101 are equally distant, so we return the smaller palindrome.

    closestPalindrome(888) ➞ 888

    closestPalindrome(27) ➞ 22


### Notes ###
If the number itself is a palindrome, return that number.