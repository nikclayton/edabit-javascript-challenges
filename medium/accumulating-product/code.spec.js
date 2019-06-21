const accumulatingProduct = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(accumulatingProduct([1, 2, 3, 4])).toEqual([1, 2, 6, 24]);
        expect(accumulatingProduct([5, 10, 1, 1])).toEqual([5, 50, 50, 50]);
        expect(accumulatingProduct([1, 5, 7])).toEqual([1, 5, 35]);
        expect(accumulatingProduct([1, 0, 1, 0])).toEqual([1, 0, 0, 0]);
        expect(accumulatingProduct([1])).toEqual([1]);
        expect(accumulatingProduct([1, 2, 2, 2, 2, 2, 2])).toEqual([1, 2, 4, 8, 16, 32, 64]);
        expect(accumulatingProduct([1, 1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1, 1]);
        expect(accumulatingProduct([])).toEqual([]);
    });
});
