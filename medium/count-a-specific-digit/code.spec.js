const digitOccurrences = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(digitOccurrences(51, 55, 5)).toEqual(6);
        expect(digitOccurrences(1, 8, 9)).toEqual(0);
        expect(digitOccurrences(71, 77, 2)).toEqual(1);
        expect(digitOccurrences(1, 14, 4)).toEqual(2);
        expect(digitOccurrences(20, 30, 2)).toEqual(11);
        expect(digitOccurrences(18, 37, 3)).toEqual(10);
        expect(digitOccurrences(5, 335, 6)).toEqual(63);
        expect(digitOccurrences(-19, 19, 0)).toEqual(3);
        expect(digitOccurrences(-8, -1, 8)).toEqual(1);
        expect(digitOccurrences(-5, -5, 4)).toEqual(0);
        expect(digitOccurrences(-5, -5, 5)).toEqual(1);
        expect(digitOccurrences(-50, -45, 4)).toEqual(5);
        expect(digitOccurrences(-500, -45, 4)).toEqual(190);
    });
});
