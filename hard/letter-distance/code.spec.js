const letterDistance = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(letterDistance('house', 'fly')).toEqual(11);
        expect(letterDistance('sharp', 'sharq')).toEqual(1);
        expect(letterDistance('abcde', 'bcdef')).toEqual(5);
        expect(letterDistance('abcde', 'a')).toEqual(4);
        expect(letterDistance('abcde', 'e')).toEqual(8);
        expect(letterDistance('abcde', 'Abcde')).toEqual(32);
        expect(letterDistance('abcde', 'A')).toEqual(36);
        expect(letterDistance('very', 'fragile')).toEqual(67);
    });
});
