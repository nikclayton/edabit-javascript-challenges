const transform = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(transform([1, 2, 3, 4, 5])).toEqual([2, 1, 4, 3, 6]);
        expect(transform([3, 3, 4, 3])).toEqual([4, 4, 3, 4]);
        expect(transform([2, 2, 0, 8, 10])).toEqual([1, 1, -1, 7, 9]);
        expect(transform([9, 13, 15, 5, 2, 11])).toEqual([10, 14, 16, 6, 1, 12]);
    });
});
