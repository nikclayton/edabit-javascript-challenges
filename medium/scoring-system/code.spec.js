const calculateScores = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(calculateScores('AAB')).toEqual([2, 1, 0]);
        expect(calculateScores('ABC')).toEqual([1, 1, 1]);
        expect(calculateScores('ABCBACC')).toEqual([2, 2, 3]);
        expect(calculateScores('CCBBBB')).toEqual([0, 4, 2]);
        expect(calculateScores('CCAABBAABBCC')).toEqual([4, 4, 4]);
        expect(calculateScores('A')).toEqual([1, 0, 0]);
        expect(calculateScores('')).toEqual([0, 0, 0]);
        expect(calculateScores('ACCCA')).toEqual([2, 0, 3]);
    });
});
