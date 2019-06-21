const letters = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(letters('sharp', 'soap')).toEqual(['aps', 'hr', 'o']);
        expect(letters('board', 'bored')).toEqual(['bdor', 'a', 'e']);
        expect(letters('happiness', 'envelope')).toEqual(['enp', 'ahis', 'lov']);
        expect(letters('match', 'ham')).toEqual(['ahm', 'ct', '']);
        expect(letters('kerfuffle', 'fluffy')).toEqual(['flu', 'ekr', 'y']);
    });
});
