const primeNumbers = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(primeNumbers(20)).toEqual(8);
        expect(primeNumbers(30)).toEqual(10);
        expect(primeNumbers(100)).toEqual(25);
        expect(primeNumbers(200)).toEqual(46);
        expect(primeNumbers(1000)).toEqual(168);
        expect(primeNumbers(-5)).toEqual(0);
        expect(primeNumbers(66)).toEqual(18);
        expect(primeNumbers(133)).toEqual(32);
        expect(primeNumbers(99)).toEqual(25);
        expect(primeNumbers(14.5)).toEqual(6);
    });
});
