const palindromeDescendant = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(palindromeDescendant(11211230)).toEqual(true);
        expect(palindromeDescendant(13001120)).toEqual(true);
        expect(palindromeDescendant(23336014)).toEqual(true);
        expect(palindromeDescendant(11)).toEqual(true);
        expect(palindromeDescendant(1122)).toEqual(false);
        expect(palindromeDescendant(332233)).toEqual(true);
        expect(palindromeDescendant(10210112)).toEqual(true);
        expect(palindromeDescendant(9735)).toEqual(false);
        expect(palindromeDescendant(97358817)).toEqual(false);
    });
});
