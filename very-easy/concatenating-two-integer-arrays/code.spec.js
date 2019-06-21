const concat = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(concat([1, 3, 5], [2, 6, 8])).toEqual([1, 3, 5, 2, 6, 8]);
        expect(concat([7, 8], [10, 9, 1, 1, 2])).toEqual([7, 8, 10, 9, 1, 1, 2]);
        expect(concat([4, 5, 1], [3, 3, 3, 3, 3])).toEqual([4, 5, 1, 3, 3, 3, 3, 3]);
    });
});
