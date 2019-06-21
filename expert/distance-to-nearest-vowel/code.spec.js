const distanceToNearestVowel = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(distanceToNearestVowel('aaaaa')).toEqual([0, 0, 0, 0, 0]);
        expect(distanceToNearestVowel('bba')).toEqual([2, 1, 0]);
        expect(distanceToNearestVowel('abbb')).toEqual([0, 1, 2, 3]);
        expect(distanceToNearestVowel('abab')).toEqual([0, 1, 0, 1]);
        expect(distanceToNearestVowel('babbb')).toEqual([1, 0, 1, 2, 3]);
        expect(distanceToNearestVowel('baaab')).toEqual([1, 0, 0, 0, 1]);
        expect(distanceToNearestVowel('abcdabcd')).toEqual([0, 1, 2, 1, 0, 1, 2, 3]);
        expect(distanceToNearestVowel('abbaaaaba')).toEqual([0, 1, 1, 0, 0, 0, 0, 1, 0]);
        expect(distanceToNearestVowel('treesandflowers')).toEqual([2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2]);
        expect(distanceToNearestVowel('pokerface')).toEqual([1, 0, 1, 0, 1, 1, 0, 1, 0]);
        expect(distanceToNearestVowel('beautiful')).toEqual([1, 0, 0, 0, 1, 0, 1, 0, 1]);
        expect(distanceToNearestVowel('rythmandblues')).toEqual([5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1]);
        expect(distanceToNearestVowel('shopper')).toEqual([2, 1, 0, 1, 1, 0, 1]);
        expect(distanceToNearestVowel('singingintherain')).toEqual([1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1]);
        expect(distanceToNearestVowel('sugarandspice')).toEqual([1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0]);
        expect(distanceToNearestVowel('totally')).toEqual([1, 0, 1, 0, 1, 2, 3]);
    });
});
