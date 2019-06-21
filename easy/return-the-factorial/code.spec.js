const factorial = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(factorial(2)).toEqual(2);
        expect(factorial(6)).toEqual(720);
        expect(factorial(3)).toEqual(6);
        expect(factorial(12)).toEqual(479001600);
        expect(factorial(5)).toEqual(120);
    });
});
