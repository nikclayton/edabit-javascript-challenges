
Create a function that **a)** takes a number, a string, and an array as parameters (in that order) and **b)** adds up points based on how many times the number or string is in the array. 

For example:
- If the number is in the array x times, then that is x points.- If the string is in the array y times, then that is y+1 points.
Return the total number of points calculated.

### Examples

```
1, '1', [] ➞ 1

1, '1', [1,'1'] ➞ 3

1, '1', [1,1,'1'] ➞ 4

1, '1', [1,'1','1'] ➞ 4

1, '1', [1,'1','1','1','1','1','1'] ➞ 8

1, 'Sometimes We Stretch the Truth', ['1','Sometimes We Stretch the Truth'] ➞ 2

1, '1', [2,3] ➞ 1

1, '1', [1,3] ➞ 2

1, '1', ['1',3] ➞ 2

1, '-1',['-1','-2',-1,'s'] ➞ 2

1, '-1',['-1','-2',-1,'s',1,1,1,1,1,1,1,1,1,1,1,'-1']  ➞ 14
```

### Notes
- Number parameter can be positive,negative, and be zero, but will not include decimals.- String parameter will only contain letter(s) of the alphabet, spaces, or number(s).- Array will only contain numbers or strings.