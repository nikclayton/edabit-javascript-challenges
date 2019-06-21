const getSubsets = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getSubsets([-1, 0, 1, 2], 2)).toEqual([[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]);
        expect(getSubsets([-1, 0, 1, 2], 3)).toEqual([[1, 2], [0, 1, 2]]);
        expect(getSubsets([1, 2, 3, 4], 5)).toEqual([[1, 4], [2, 3]]);
        expect(getSubsets([-1, 0, 1, 2], 4)).toEqual([]);
        expect(getSubsets([1, 2, 3, 4, 5, 6], 6)).toEqual([[6], [1, 5], [2, 4], [1, 2, 3]]);
        expect(getSubsets([-3, -2, -1, 0, 1, 2, 3], 2)).toEqual([[2], [-1, 3], [0, 2], [-3, 2, 3], [-2, 1, 3], [-1, 0, 3], [-1, 1, 2], [-3, 0, 2, 3], [-2, -1, 2, 3], [-2, 0, 1, 3], [-1, 0, 1, 2], [-3, -1, 1, 2, 3], [-2, -1, 0, 2, 3], [-3, -1, 0, 1, 2, 3]]);
    });
});
