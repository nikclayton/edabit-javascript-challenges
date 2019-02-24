
Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string `"My head, body, and tail."`, otherwise, return `"Incomplete."`.

### Examples

```
verifySubstrs("Onomatopeia", "on", "mato", "ia") ➞ "Incomplete."

verifySubstrs("Centipede", "Cent", "tip", "pede") ➞ "My head, body, and tail."

verifySubstrs("apple", "AP", "PPL", "LE") ➞ "Incomplete."
```

### Notes
- You'll always get exactly four strings as arguments.- Tests are case sensitive.