
Create a function that returns the number of argument it was called with.

### Examples

```
numArgs() ➞ 0

numArgs("foo") ➞ 1

numArgs("foo", "bar") ➞ 2

numArgs(true, false) ➞ 2

numArgs({}) ➞ 1
```

### Notes
- Each key given in a last hash argument counts as one argument.- A block counts as one argument.