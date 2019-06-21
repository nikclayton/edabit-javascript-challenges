const isValidPhoneNumber = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isValidPhoneNumber('(123) 456-7890')).toEqual(true);
        expect(isValidPhoneNumber('(1111)555 2345')).toEqual(false);
        expect(isValidPhoneNumber('(098) 123 4567')).toEqual(false);
        expect(isValidPhoneNumber('(123)456-7890')).toEqual(false);
        expect(isValidPhoneNumber('abc(123)456-7890')).toEqual(false);
        expect(isValidPhoneNumber('(123)456-7890abc')).toEqual(false);
        expect(isValidPhoneNumber('abc(123)456-7890abc')).toEqual(false);
        expect(isValidPhoneNumber('abc(123) 456-7890')).toEqual(false);
        expect(isValidPhoneNumber('(123) 456-7890abc')).toEqual(false);
        expect(isValidPhoneNumber('abc(123) 456-7890abc')).toEqual(false);
        expect(isValidPhoneNumber('(123)-456-7890')).toEqual(false);
        expect(isValidPhoneNumber('(123)_456-7890')).toEqual(false);
        expect(isValidPhoneNumber('-123) 456-7890')).toEqual(false);
        expect(isValidPhoneNumber('(519) 505-6498')).toEqual(true);
    });
});
