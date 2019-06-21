const primeFactorize = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(primeFactorize(32)).toEqual([2, 2, 2, 2, 2]);
        expect(primeFactorize(17)).toEqual([17]);
        expect(primeFactorize(35)).toEqual([5, 7]);
        expect(primeFactorize(2)).toEqual([2]);
        expect(primeFactorize(2)).not.toEqual([1, 2]);
        expect(primeFactorize(1)).not.toEqual([1]);
        expect(primeFactorize(35)).not.toEqual([7, 5]);
        expect(primeFactorize(2591)).toEqual([2591]);
        expect(primeFactorize(2532)).toEqual([2, 2, 3, 211]);
    });
});
