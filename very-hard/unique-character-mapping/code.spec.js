const characterMapping = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(characterMapping('abcd')).toEqual([0, 1, 2, 3]);
        expect(characterMapping('abb')).toEqual([0, 1, 1]);
        expect(characterMapping('babbcb')).toEqual([0, 1, 0, 0, 2, 0]);
        expect(characterMapping('aaabb')).toEqual([0, 0, 0, 1, 1]);
        expect(characterMapping('abccbc')).toEqual([0, 1, 2, 2, 1, 2]);
        expect(characterMapping('fluffy')).toEqual([0, 1, 2, 0, 0, 3]);
        expect(characterMapping('madness')).toEqual([0, 1, 2, 3, 4, 5, 5]);
        expect(characterMapping('buttery')).toEqual([0, 1, 2, 2, 3, 4, 5]);
        expect(characterMapping('canine')).toEqual([0, 1, 2, 3, 2, 4]);
        expect(characterMapping('hohoho')).toEqual([0, 1, 0, 1, 0, 1]);
        expect(characterMapping('hmmmmm')).toEqual([0, 1, 1, 1, 1, 1]);
        expect(characterMapping('')).toEqual([]);
    });
});
