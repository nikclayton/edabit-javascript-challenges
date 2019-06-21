const lessThanOrEqualToZero = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(lessThanOrEqualToZero(5)).toEqual(false);
        expect(lessThanOrEqualToZero(0)).toEqual(true);
        expect(lessThanOrEqualToZero(-5)).toEqual(true);
        expect(lessThanOrEqualToZero(1)).toEqual(false);
        expect(lessThanOrEqualToZero(2)).toEqual(false);
        expect(lessThanOrEqualToZero(10000)).toEqual(false);
        expect(lessThanOrEqualToZero(0.5)).toEqual(false);
    });
});
