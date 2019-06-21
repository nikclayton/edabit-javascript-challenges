const validateCard = require('./code');

describe('Tests', () => {
    test('Passes Luhn test, but too short.', () => {
        expect(validateCard(79927398713)).toEqual(false);
    });
    
    test('the tests', () => {
        expect(validateCard(79927398714)).toEqual(false);
        expect(validateCard(709092739800713)).toEqual(true);
        expect(validateCard(1234567890123456)).toEqual(false);
        expect(validateCard(12345678901237)).toEqual(true);
        expect(validateCard(5496683867445267)).toEqual(true);
        expect(validateCard(4508793361140566)).toEqual(false);
        expect(validateCard(376785877526048)).toEqual(true);
        expect(validateCard(36717601781975)).toEqual(false);
    });
});
