Write a function that takes in an array of integers and returns the integers that are either **palindromes**or **almost-palindromes**. An **almost-palindrome**is any integer that can be rearranged to form a palindrome.

For example, the numbers `677`and `338`are both **almost-palindromes**, since they can be rearranged to form `767`and `383`, respectively.


### Examples ###
    palindromeSieve([443, 12, 639, 121, 3232]) ➞ [443, 121, 3232]
    // Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

    palindromeSieve([5, 55, 6655, 8787]) ➞ [5, 55, 6655, 8787]
    // Single-digit numbers are automatically palindromes.

    palindromeSieve([897, 89, 23, 54, 6197, 53342]) ➞ []


### Notes ###
Return an empty array if none of the numbers are palindromes or almost-palindromes.