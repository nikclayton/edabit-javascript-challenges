const subset = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(subset([1, 3], [1, 3, 3, 5])).toEqual(true);
        expect(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])).toEqual(true);
        expect(subset([1, 3], [1, 33])).toEqual(false);
        expect(subset([1, 3, 10], [10, 8, 8, 8])).toEqual(false);
        expect(subset([5, 9, 13], [13, 9, 5])).toEqual(true);
        expect(subset([5, 9, 13], [13, 9, 5, 1, 1, 1])).toEqual(true);
        expect(subset([5, 9, 13], [13, 5, 1, 1, 1])).toEqual(false);
    });
});
