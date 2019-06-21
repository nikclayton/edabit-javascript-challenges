const sortByCharacter = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortByCharacter(['az16', 'by35', 'cx24'], 1)).toEqual(['az16', 'by35', 'cx24']);
        expect(sortByCharacter(['az16', 'by35', 'cx24'], 2)).toEqual(['cx24', 'by35', 'az16']);
        expect(sortByCharacter(['az16', 'by35', 'cx24'], 3)).toEqual(['az16', 'cx24', 'by35']);
        expect(sortByCharacter(['az16', 'by35', 'cx24'], 4)).toEqual(['cx24', 'by35', 'az16']);
        expect(sortByCharacter(['apple', 'mayor', 'bendy', 'petal'], 5)).toEqual(['apple', 'petal', 'mayor', 'bendy']);
        expect(sortByCharacter(['team', 'mate', 'bade'], 3)).toEqual(['team', 'bade', 'mate']);
    });
});
