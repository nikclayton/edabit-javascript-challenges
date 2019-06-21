const threeSum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(threeSum([0, 1, -1, -1, 2])).toEqual([[0, 1, -1], [-1, -1, 2]]);
        expect(threeSum([0, 0, 0, 5, -5])).toEqual([[0, 0, 0], [0, 5, -5]]);
        expect(threeSum([0, -1, 1, 0, -1, 1])).toEqual([[0, -1, 1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [1, 0, -1]]);
        expect(threeSum([0, 5, 5, 0, 0])).toEqual([[0, 0, 0]]);
        expect(threeSum([0, 5, -5, 0, 0])).toEqual([[0, 5, -5], [0, 0, 0], [5, -5, 0]]);
        expect(threeSum([1, 2, 3, -5, 8, 9, -9, 0])).toEqual([[1, 8, -9], [2, 3, -5], [9, -9, 0]]);
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
        expect(threeSum([1, 5, 5, 2])).toEqual([]);
        expect(threeSum([1, 1])).toEqual([]);
        expect(threeSum([])).toEqual([]);
    });
});
