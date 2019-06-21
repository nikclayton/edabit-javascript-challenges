const accumulatingArray = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(accumulatingArray([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(accumulatingArray([1, 5, 7])).toEqual([1, 6, 13]);
        expect(accumulatingArray([1, 0, 1, 0, 1])).toEqual([1, 1, 2, 2, 3]);
        expect(accumulatingArray([1, 2, 3, 0, 0, 1])).toEqual([1, 3, 6, 6, 6, 7]);
        expect(accumulatingArray([])).toEqual([]);
    });
});
