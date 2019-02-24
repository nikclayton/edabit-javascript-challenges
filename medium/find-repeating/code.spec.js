const findRepeating = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(findRepeating('')).toEqual([]);
        expect(findRepeating('a')).toEqual([['a', 0, 0, 1]]);
        expect(findRepeating('1337')).toEqual([['1', 0, 0, 1], ['3', 1, 2, 2], ['7', 3, 3, 1]]);
        expect(findRepeating('aabbb')).toEqual([['a', 0, 1, 2], ['b', 2, 4, 3]]);
        expect(findRepeating('addressee')).toEqual([['a', 0, 0, 1], ['d', 1, 2, 2], ['r', 3, 3, 1], ['e', 4, 4, 1], ['s', 5, 6, 2], ['e', 7, 8, 2]]);
        expect(findRepeating('aabbbaabbb')).toEqual([['a', 0, 1, 2], ['b', 2, 4, 3], ['a', 5, 6, 2], ['b', 7, 9, 3]]);
        expect(findRepeating('1111222233334444')).toEqual([['1', 0, 3, 4], ['2', 4, 7, 4], ['3', 8, 11, 4], ['4', 12, 15, 4]]);
        expect(findRepeating('1000000000000066600000000000001')).toEqual([['1', 0, 0, 1], ['0', 1, 13, 13], ['6', 14, 16, 3], ['0', 17, 29, 13], ['1', 30, 30, 1]]);
    });
});
