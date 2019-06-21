const countDigits = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countDigits([22, 53, 99, 61, 777, 8], 'odd')).toEqual([0, 2, 2, 1, 3, 0]);
        expect(countDigits([54, 113, 89, 10], 'odd')).toEqual([1, 3, 1, 1]);
        expect(countDigits([17, 19, 21], 'odd')).toEqual([2, 2, 1]);
        expect(countDigits([1, 2, 3, 4], 'odd')).toEqual([1, 0, 1, 0]);
        expect(countDigits([22, 53, 99, 61, 777, 8], 'even')).toEqual([2, 0, 0, 1, 0, 1]);
        expect(countDigits([54, 113, 89, 10], 'even')).toEqual([1, 0, 1, 1]);
        expect(countDigits([5, 8, 9, 12], 'even')).toEqual([0, 1, 0, 1]);
        expect(countDigits([1, 2, 3], 'even')).toEqual([0, 1, 0]);
    });
});
