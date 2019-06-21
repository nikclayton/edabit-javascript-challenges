const mauriceWins = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mauriceWins([3, 5, 10], [4, 7, 11])).toEqual(true);
        expect(mauriceWins([6, 8, 9], [7, 12, 14])).toEqual(false);
        expect(mauriceWins([1, 8, 20], [2, 9, 100])).toEqual(true);
        expect(mauriceWins([1, 2, 3], [2, 3, 4])).toEqual(false);
        expect(mauriceWins([2, 4, 10], [3, 9, 11])).toEqual(true);
        expect(mauriceWins([3, 8, 13], [5, 11, 15])).toEqual(true);
    });
});
