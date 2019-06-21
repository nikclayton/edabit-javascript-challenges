const isValidHexCode = require('./code');

describe('Tests', () => {
    test('Length exceeds 6.', () => {
        expect(isValidHexCode('#CD5C58C')).toEqual(false);
    });

test('Alphabetic characters not in A-F.', () => {
        expect(isValidHexCode('#CD5C5Z')).toEqual(false);
    });

test('Unacceptable character.', () => {
        expect(isValidHexCode('#CD5C&C')).toEqual(false);
    });

test('Does not start with #.', () => {
        expect(isValidHexCode('CD5C5C')).toEqual(false);
    });

test('Length exceeds 6.', () => {
        expect(isValidHexCode('#123CCCD')).toEqual(false);
    });

test('Length exceeds 6.', () => {
        expect(isValidHexCode('#9876543')).toEqual(false);
    });

test('Not acceptable alphabetic characters.', () => {
        expect(isValidHexCode('#ZCCZCC')).toEqual(false);
    });

test('Not acceptable alphabetic characters.', () => {
        expect(isValidHexCode('#Z88Z99')).toEqual(false);
    });

test('Unacceptable character.', () => {
        expect(isValidHexCode('#Z88!99')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(isValidHexCode('#CD5C5C')).toEqual(true);
        expect(isValidHexCode('#EAECEE')).toEqual(true);
        expect(isValidHexCode('#eaecee')).toEqual(true);
        expect(isValidHexCode('#123456')).toEqual(true);
        expect(isValidHexCode('#987654')).toEqual(true);
        expect(isValidHexCode('#CCCCCC')).toEqual(true);
    });
});
