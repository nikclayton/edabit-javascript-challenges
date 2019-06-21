const carryDigits = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(carryDigits(36, 135)).toEqual(1);
        expect(carryDigits(671, 329)).toEqual(3);
        expect(carryDigits(1111, 3333)).toEqual(0);
        expect(carryDigits(4, 5268)).toEqual(1);
        expect(carryDigits(53214, 16905)).toEqual(2);
        expect(carryDigits(53214, 56905)).toEqual(3);
        expect(carryDigits(515, 4)).toEqual(0);
        expect(carryDigits(515, 90)).toEqual(1);
        expect(carryDigits(63223, 70000)).toEqual(1);
    });
});
