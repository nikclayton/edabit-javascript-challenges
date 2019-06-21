const countUnique = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countUnique('apple', 'play')).toEqual(5);
        expect(countUnique('sore', 'zebra')).toEqual(7);
        expect(countUnique('pip', 'geeks')).toEqual(6);
        expect(countUnique('a', 'soup')).toEqual(5);
        expect(countUnique('maniac', 'maniac')).toEqual(5);
    });
});
