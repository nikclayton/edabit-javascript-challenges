const selReverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(selReverse([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 1, 4, 3, 6, 5]);
        expect(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)).toEqual([6, 4, 2, 12, 10, 8, 16, 14]);
        expect(selReverse([5, 7, 2, 6, 0, 4, 6], 100)).toEqual([6, 4, 0, 6, 2, 7, 5]);
        expect(selReverse([6, 0, 0, 0, 3, 8, 9, 7, 1], 9)).toEqual([1, 7, 9, 8, 3, 0, 0, 0, 6]);
        expect(selReverse([12, 54, 67, 34, 65, 34, 33], 0)).toEqual([12, 54, 67, 34, 65, 34, 33]);
        expect(selReverse([12, 54, 67, 34, 65, 34, 33], 1)).toEqual([12, 54, 67, 34, 65, 34, 33]);
        expect(selReverse([22, 13, 22, 13, 13, 22, 22, 13], 5)).toEqual([13, 13, 22, 13, 22, 13, 22, 22]);
        expect(selReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]);
        expect(selReverse([1], 2)).toEqual([1]);
        expect(selReverse([1, 2], 2)).toEqual([2, 1]);
    });
});
