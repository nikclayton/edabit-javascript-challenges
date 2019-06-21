const nextPrime = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nextPrime(12)).toEqual(13);
        expect(nextPrime(24)).toEqual(29);
        expect(nextPrime(11)).toEqual(11);
        expect(nextPrime(13)).toEqual(13);
        expect(nextPrime(14)).toEqual(17);
        expect(nextPrime(33)).toEqual(37);
    });
});
