const countPosSumNeg = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
        expect(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])).toEqual([7, -252]);
        expect(countPosSumNeg([91, -4, 80, -73, -28])).toEqual([2, -105]);
        expect(countPosSumNeg([])).toEqual([]);
        expect(countPosSumNeg([69, 100, 28, 47, 53, -61, -24])).toEqual([5, -85]);
        expect(countPosSumNeg([5, 7, 9, -3, -7, 61, -24])).toEqual([4, -34]);
        expect(countPosSumNeg(undefined)).toEqual([]);
        expect(countPosSumNeg([98, 51, -19, -97])).toEqual([2, -116]);
        expect(countPosSumNeg([-42, 3, -51, -64, 69, 77, -20, -5, 68, -76])).toEqual([4, -258]);
        expect(countPosSumNeg(undefined, undefined, undefined)).toEqual([]);
    });
});
