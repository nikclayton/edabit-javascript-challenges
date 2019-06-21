const noOdds = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(noOdds([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
        expect(noOdds([43, 65, 23, 89, 53, 9, 6])).toEqual([6]);
        expect(noOdds([718, 991, 449, 644, 380, 440])).toEqual([718, 644, 380, 440]);
        expect(noOdds([148, 6, 16, 85])).toEqual([148, 6, 16]);
        expect(noOdds([9, 49, 23])).toEqual([]);
        expect(noOdds([34, 43, 32, 49, 40])).toEqual([34, 32, 40]);
        expect(noOdds([1232, 1990, 1284, 1391, 1958])).toEqual([1232, 1990, 1284, 1958]);
        expect(noOdds([2766, 2651, 2373, 2916, 2397, 2539])).toEqual([2766, 2916]);
        expect(noOdds([53, 65, 52, 62, 59])).toEqual([52, 62]);
        expect(noOdds([393, 156, 14, 166, 129, 246])).toEqual([156, 14, 166, 246]);
    });
});
