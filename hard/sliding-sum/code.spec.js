const slidingSum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(slidingSum([1, 4, 2, 3, 5, 0], 2, 5)).toEqual([[1, 4], [2, 3], [5, 0]]);
        expect(slidingSum([5, 5, 5, 5, 5], 1, 5)).toEqual([[5], [5], [5], [5], [5]]);
        expect(slidingSum([5, 5, 5, 5, 5], 5, 24)).toEqual([]);
        expect(slidingSum([3, 2, 1, 1, 3, 2], 4, 7)).toEqual([[3, 2, 1, 1], [2, 1, 1, 3], [1, 1, 3, 2]]);
        expect(slidingSum([3, 4, 1, 9, 9, 0, 3, 5, 4], 3, 8)).toEqual([[3, 4, 1], [0, 3, 5]]);
    });
});
