const anagram = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(anagram('Justin Bieber', ['injures', 'ebb', 'it'])).toEqual(true);
        expect(anagram('Natalie Portman', ['ornamental', 'pita'])).toEqual(true);
        expect(anagram('Emma Watson', ['mows', 'meant', 'a'])).toEqual(true);
        expect(anagram('Daniel Radcliffe', ['clarified', 'elf', 'and'])).toEqual(true);
        expect(anagram('Tom Hiddleston', ['tenths', 'mood', 'lid'])).toEqual(true);
        expect(anagram('Blake Lively', ['key', 'veal', 'bill'])).toEqual(true);
        expect(anagram('Ryan Reynolds', ['yonder', 'sly', 'ran'])).toEqual(true);
        expect(anagram('Kristen Stewart', ['trinkets', 'war', 'set'])).toEqual(true);
        expect(anagram('Chris Pratt', ['chirps', 'rat'])).toEqual(false);
        expect(anagram('Jeff Goldblum', ['jog', 'meld', 'bluffs'])).toEqual(false);
        expect(anagram('Taylor Swift', ['stratify', 'ow'])).toEqual(false);
        expect(anagram('Adam Levine', ['medieval', 'man'])).toEqual(false);
        expect(anagram('Blake Shelton', ['betoken', 'all', 'she'])).toEqual(false);
        expect(anagram('Miley Cyrus', ['lyric', 'my', 'suer'])).toEqual(false);
        expect(anagram('Matt Damon', ['madman'])).toEqual(false);
        expect(anagram('Graham Norton', ['graham', 'not', 'or'])).toEqual(false);
        expect(anagram('Graham Norton', ['graham', 'not', 'or'])).toEqual(false);
    });
});
