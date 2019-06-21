const probability = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(probability([14, 19, 2, 6], 12)).toEqual(50);
        expect(probability([11, 10, 9, 18, 16, 18, 4, 3, 5], 13)).toEqual(33.3);
        expect(probability([2, 13, 1, 11, 6, 9, 11, 14, 3], 15)).toEqual(0);
        expect(probability([11, 6, 17, 2, 1, 16, 20, 15], 7)).toEqual(62.5);
        expect(probability([12, 15, 12, 8, 20, 16, 1], 1)).toEqual(100);
        expect(probability([15, 8, 12, 1, 11, 4], 4)).toEqual(83.3);
        expect(probability([14, 11, 16, 3, 13, 14, 3], 8)).toEqual(71.4);
        expect(probability([1, 4, 18, 19, 15, 3, 3, 11], 23)).toEqual(0);
        expect(probability([9, 8, 17, 13, 17], 8)).toEqual(100);
        expect(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6)).toEqual(70);
        expect(probability([15, 4, 6, 11, 11, 17, 9, 16, 7, 4, 5, 10], 12)).toEqual(25);
        expect(probability([7, 1, 5, 7, 15, 15, 16, 14], 2)).toEqual(87.5);
        expect(probability([11, 4, 6, 7, 14, 4, 4], 8)).toEqual(28.6);
        expect(probability([10, 10, 3, 18, 14, 1, 2, 19, 17, 2, 4, 11, 18, 6, 3], 11)).toEqual(40);
    });
});
