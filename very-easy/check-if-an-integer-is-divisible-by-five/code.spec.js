const divisibleByFive = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(divisibleByFive(7)).toEqual(false);
        expect(divisibleByFive(5)).toEqual(true);
        expect(divisibleByFive(15)).toEqual(true);
        expect(divisibleByFive(33)).toEqual(false);
        expect(divisibleByFive(-18)).toEqual(false);
        expect(divisibleByFive(999)).toEqual(false);
        expect(divisibleByFive(2)).toEqual(false);
    });
});
