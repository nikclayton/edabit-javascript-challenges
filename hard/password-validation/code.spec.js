const validatePassword = require('./code');

describe('Tests', () => {
    test('too short', () => {
        expect(validatePassword('P1zz@')).toEqual(false);
    });

test('too long', () => {
        expect(validatePassword('P1zz@P1zz@P1zz@P1zz@P1zz@')).toEqual(false);
    });

test('missing uppercase letter', () => {
        expect(validatePassword('mypassword11')).toEqual(false);
    });

test('missing lowercase letter', () => {
        expect(validatePassword('MYPASSWORD11')).toEqual(false);
    });

test('missing number', () => {
        expect(validatePassword('iLoveYou')).toEqual(false);
    });

test('special character "è" disallowed', () => {
        expect(validatePassword('Pè7$areLove')).toEqual(false);
    });

test('repeated character "eee" disallowed', () => {
        expect(validatePassword('Repeeea7!')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(validatePassword('H4(k+x0')).toEqual(true);
        expect(validatePassword('Fhg93@')).toEqual(true);
        expect(validatePassword('aA0!@#$%^&*()+=_-{}[]:;”')).toEqual(true);
        expect(validatePassword('zZ9’?<>,.')).toEqual(true);
    });
});
