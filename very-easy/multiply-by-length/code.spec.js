const MultiplyByLength = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(MultiplyByLength([2, 6, 4, 9])).toEqual([8, 24, 16, 36]);
        expect(MultiplyByLength([4, 1, 1])).toEqual([12, 3, 3]);
        expect(MultiplyByLength([1, 0, 3, 3, 7, 2, 1])).toEqual([7, 0, 21, 21, 49, 14, 7]);
        expect(MultiplyByLength([0])).toEqual([0]);
    });
});
