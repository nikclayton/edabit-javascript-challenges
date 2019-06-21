const findDigitAmount = require('./code');

describe('Tests', () => {
    test('Should work with one digit', () => {
        expect(findDigitAmount(1)).toEqual(1);
    });

test('Should work with a two-digit number', () => {
        expect(findDigitAmount(67)).toEqual(2);
    });

test('Should work with a three-digit number', () => {
        expect(findDigitAmount(123)).toEqual(3);
    });

test('Should work with a bit bigger number', () => {
        expect(findDigitAmount(55551)).toEqual(5);
    });

test('Should work with bigger numbers', () => {
        expect(findDigitAmount(96456431)).toEqual(8);
    });

test('0 should return 1, as it is a digit', () => {
        expect(findDigitAmount(0)).toEqual(1);
    });
});
