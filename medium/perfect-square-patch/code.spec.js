const squarePatch = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(squarePatch(3)).toEqual([[3, 3, 3], [3, 3, 3], [3, 3, 3]]);
        expect(squarePatch(2)).toEqual([[2, 2], [2, 2]]);
        expect(squarePatch(4)).toEqual([[4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4]]);
        expect(squarePatch(6)).toEqual([[6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6], [6, 6, 6, 6, 6, 6]]);
        expect(squarePatch(5)).toEqual([[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]]);
        expect(squarePatch(1)).toEqual([[1]]);
        expect(squarePatch(0)).toEqual([]);
    });
});
