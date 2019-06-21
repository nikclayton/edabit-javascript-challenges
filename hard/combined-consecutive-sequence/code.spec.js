const consecutiveCombo = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(consecutiveCombo([1, 4, 5, 7], [2, 3, 6])).toEqual(true);
        expect(consecutiveCombo([1, 4, 5, 6], [2, 7, 8, 9])).toEqual(false);
        expect(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10])).toEqual(false);
        expect(consecutiveCombo([7, 5, 4, 1], [2, 3, 6, 8])).toEqual(true);
        expect(consecutiveCombo([33, 34, 40], [39, 38, 37, 36, 35, 32, 31, 30])).toEqual(true);
        expect(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10])).toEqual(false);
        expect(consecutiveCombo([44, 46], [45])).toEqual(true);
        expect(consecutiveCombo([4, 3, 1], [2, 5])).toEqual(true);
        expect(consecutiveCombo([4, 3, 1], [2, 5, 7, 6])).toEqual(true);
        expect(consecutiveCombo([4, 3, 1], [7, 6, 5])).toEqual(false);
        expect(consecutiveCombo([4, 3, 1], [0, 7, 6, 5])).toEqual(false);
        expect(consecutiveCombo([44, 46], [45])).toEqual(true);
    });
});
