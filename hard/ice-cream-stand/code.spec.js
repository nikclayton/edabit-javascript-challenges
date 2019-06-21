const profit = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(profit(32, 69)).toEqual([51, 50]);
        expect(profit(49, 51)).toEqual([50, 50]);
        expect(profit(25, 26)).toEqual([26, 75]);
        expect(profit(24, 26)).toEqual([25, 75]);
        expect(profit(0, 1)).toEqual([1, 100]);
        expect(profit(3, 6)).toEqual([5, 96]);
        expect(profit(55, 65)).toEqual([60, 40]);
        expect(profit(25, 75)).toEqual([50, 50]);
    });
});
