const isPrime = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPrime(1)).toEqual(false);
        expect(isPrime(2)).toEqual(true);
        expect(isPrime(3)).toEqual(true);
        expect(isPrime(4)).toEqual(false);
        expect(isPrime(5)).toEqual(true);
        expect(isPrime(6)).toEqual(false);
        expect(isPrime(7)).toEqual(true);
        expect(isPrime(8)).toEqual(false);
        expect(isPrime(9)).toEqual(false);
        expect(isPrime(10)).toEqual(false);
        expect(isPrime(11)).toEqual(true);
        expect(isPrime(102)).toEqual(false);
        expect(isPrime(103)).toEqual(true);
    });
});
