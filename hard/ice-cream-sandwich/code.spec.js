const isIcecreamSandwich = require('./code');

describe('Tests', () => {
    test('only filling', () => {
        expect(isIcecreamSandwich('BBBBB')).toEqual(false);
    });

test('ends are unbalanced', () => {
        expect(isIcecreamSandwich('AAACCCAA')).toEqual(false);
    });

test('can only have one type of filling', () => {
        expect(isIcecreamSandwich('AACDCAA')).toEqual(false);
    });

test('only one end', () => {
        expect(isIcecreamSandwich('AAABB')).toEqual(false);
    });

test('too short', () => {
        expect(isIcecreamSandwich('AA')).toEqual(false);
    });

test('too short', () => {
        expect(isIcecreamSandwich('A')).toEqual(false);
    });

test('too short', () => {
        expect(isIcecreamSandwich('')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(isIcecreamSandwich('AABBBAA')).toEqual(true);
        expect(isIcecreamSandwich('3&&3')).toEqual(true);
        expect(isIcecreamSandwich('yyyyymmmmmmmmyyyyy')).toEqual(true);
        expect(isIcecreamSandwich('hhhhhhhhmhhhhhhhh')).toEqual(true);
        expect(isIcecreamSandwich('CDC')).toEqual(true);
    });
});
