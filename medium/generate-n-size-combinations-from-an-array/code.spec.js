const combo = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(combo([1, 2, 3, 4], 2)).toEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
        expect(combo([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]);
        expect(combo([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
        expect(combo([1, 2, 3, 4], 5)).toEqual([]);
        expect(combo([1, 2, 3, 4], 0)).toEqual([[]]);
        expect(combo(['a', 'b', 'c'], 0)).toEqual([[]]);
        expect(combo(['a', 'b', 'c'], 4)).toEqual([]);
        expect(combo(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
        expect(combo(['a', 'b', 'c'], 2)).toEqual([['a', 'b'], ['a', 'c'], ['b', 'c']]);
        expect(combo(['a', 'b', 'c'], 3)).toEqual([['a', 'b', 'c']]);
    });
});
