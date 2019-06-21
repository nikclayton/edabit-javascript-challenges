const validatePIN = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(validatePIN('1234')).toEqual(true);
        expect(validatePIN('12345')).toEqual(false);
        expect(validatePIN('a234')).toEqual(false);
        expect(validatePIN('')).toEqual(false);
        expect(validatePIN('%234')).toEqual(false);
        expect(validatePIN('`234')).toEqual(false);
        expect(validatePIN('@234')).toEqual(false);
        expect(validatePIN('#234')).toEqual(false);
        expect(validatePIN('$234')).toEqual(false);
        expect(validatePIN('*234')).toEqual(false);
        expect(validatePIN('5678')).toEqual(true);
        expect(validatePIN('^234')).toEqual(false);
        expect(validatePIN('(234')).toEqual(false);
        expect(validatePIN(')234')).toEqual(false);
        expect(validatePIN('123456')).toEqual(true);
        expect(validatePIN('-234')).toEqual(false);
        expect(validatePIN('_234')).toEqual(false);
        expect(validatePIN('+234')).toEqual(false);
        expect(validatePIN('=234')).toEqual(false);
        expect(validatePIN('?234')).toEqual(false);
    });
});
