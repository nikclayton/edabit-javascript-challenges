const charIndex = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(charIndex('hello', 'l')).toEqual([2, 3]);
        expect(charIndex('circumlocution', 'r')).toEqual([2, 2]);
        expect(charIndex('circumlocution', 'i')).toEqual([1, 11]);
        expect(charIndex('circumlocution', 'c')).toEqual([0, 8]);
        expect(charIndex('happy', 'h')).toEqual([0, 0]);
        expect(charIndex('happy', 'p')).toEqual([2, 3]);
        expect(charIndex('happy', 'e')).toEqual(undefined);
    });
});
