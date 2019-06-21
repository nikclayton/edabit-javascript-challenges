const sumDigits = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sumDigits(7, 8)).toEqual(15);
        expect(sumDigits(17, 20)).toEqual(29);
        expect(sumDigits(10, 12)).toEqual(6);
        expect(sumDigits(500, 506)).toEqual(56);
        expect(sumDigits(66, 789)).toEqual(9324);
    });
});
