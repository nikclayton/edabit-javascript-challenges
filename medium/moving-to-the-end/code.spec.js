const moveToEnd = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(moveToEnd([1, 3, 2, 4, 4, 1], 1)).toEqual([3, 2, 4, 4, 1, 1]);
        expect(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)).toEqual([7, 8, 1, 2, 3, 4, 9]);
        expect(moveToEnd([7, 7, 7, 6, 6, 6, 6], 7)).toEqual([6, 6, 6, 6, 7, 7, 7]);
        expect(moveToEnd(['a', 'c', 'c', 'c', 'b', 'c'], 'b')).toEqual(['a', 'c', 'c', 'c', 'c', 'b']);
        expect(moveToEnd(['a', 'c', 'c', 'c', 'b', 'c'], 'c')).toEqual(['a', 'b', 'c', 'c', 'c', 'c']);
        expect(moveToEnd(['a', 'a', 'a', 'b'], 'a')).toEqual(['b', 'a', 'a', 'a']);
    });
});
