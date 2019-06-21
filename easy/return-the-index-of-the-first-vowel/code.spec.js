const firstVowel = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(firstVowel('hello')).toEqual(1);
        expect(firstVowel('apple')).toEqual(0);
        expect(firstVowel('string')).toEqual(3);
        expect(firstVowel('STRAWBERRY')).toEqual(3);
        expect(firstVowel('MELON')).toEqual(1);
        expect(firstVowel('piNNEaPLE')).toEqual(1);
    });
});
