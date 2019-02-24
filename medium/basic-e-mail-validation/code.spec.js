const validateEmail = require('./code');

describe('Tests', () => {
    test('Don\'t forget about empty strings!', () => {
        expect(validateEmail('')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(validateEmail('@edabit.com')).toEqual(false);
        expect(validateEmail('@edabit')).toEqual(false);
        expect(validateEmail('matt@edabit.com')).toEqual(true);
        expect(validateEmail('hello.gmail@com')).toEqual(false);
        expect(validateEmail('bill.gates@microsoft.com')).toEqual(true);
        expect(validateEmail('hello@email')).toEqual(false);
        expect(validateEmail('%^%$#%^%')).toEqual(false);
        expect(validateEmail('www.email.com')).toEqual(false);
        expect(validateEmail('email')).toEqual(false);
    });
});
