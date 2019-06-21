const palindromeSet = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(palindromeSet(['cb77c', 'ccc888', 'ccc789', 'abc89'])).toEqual([2, 2, 1, 0]);
        expect(palindromeSet(['18a99b89cc881ba', 'p7o8p987', 'p7o', 'p7o8'])).toEqual([1, 2, 1, 0]);
        expect(palindromeSet(['ab9a', 'abba', 'aa78bb8bbaa7', 'a88a'])).toEqual([2, 1, 2, 2]);
        expect(palindromeSet(['789', '555', 'ccc', 'abba'])).toEqual([0, 1, 1, 1]);
        expect(palindromeSet(['7a', '5f', '6c'])).toEqual([2, 2, 2]);
        expect(palindromeSet(['7ab', '5fc', '6cd'])).toEqual([1, 1, 1]);
        expect(palindromeSet(['87ab', '15fc', '26cd'])).toEqual([0, 0, 0]);
        expect(palindromeSet(['1234ab', '144a441'])).toEqual([0, 2]);
        expect(palindromeSet([''])).toEqual([0]);
    });
});
