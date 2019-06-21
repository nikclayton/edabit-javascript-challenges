const digitSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(digitSort([77, 23, 5, 7, 101])).toEqual([101, 23, 77, 5, 7]);
        expect(digitSort([1, 5, 9, 2, 789, 563, 444])).toEqual([444, 563, 789, 1, 2, 5, 9]);
        expect(digitSort([53219, 3772, 564, 32, 1])).toEqual([53219, 3772, 564, 32, 1]);
        expect(digitSort([9, 667, 87, 56, 3023, 5555, 111])).toEqual([3023, 5555, 111, 667, 56, 87, 9]);
    });
});
