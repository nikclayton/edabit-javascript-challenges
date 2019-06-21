const isPrime = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPrime(31)).toEqual(true);
        expect(isPrime(18)).toEqual(false);
        expect(isPrime(11)).toEqual(true);
        expect(isPrime(12)).toEqual(false);
        expect(isPrime(1)).toEqual(false);
        expect(isPrime(3)).toEqual(true);
        expect(isPrime(48)).toEqual(false);
        expect(isPrime(10)).toEqual(false);
        expect(isPrime(5)).toEqual(true);
        expect(isPrime(77)).toEqual(false);
        expect(isPrime(7)).toEqual(true);
    });
});
