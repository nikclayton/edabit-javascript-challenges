const isValid = require('./code');

describe('Tests', () => {
    test('No non-digits allowed.', () => {
        expect(isValid('853a7')).toEqual(false);
    });

test('No spaces allowed.', () => {
        expect(isValid('732 32')).toEqual(false);
    });

test('No sequences of length greater than 5.', () => {
        expect(isValid('788876')).toEqual(false);
    });

test('No letters allowed.', () => {
        expect(isValid('a923b')).toEqual(false);
    });

test('No non-digits allowed.', () => {
        expect(isValid('5923!')).toEqual(false);
    });

test('No letters and no sequences of length greater than 5.', () => {
        expect(isValid('59238aa')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(isValid('59001')).toEqual(true);
        expect(isValid('88231')).toEqual(true);
    });
});
