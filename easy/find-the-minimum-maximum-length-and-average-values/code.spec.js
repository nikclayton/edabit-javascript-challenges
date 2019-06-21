const minMaxLengthAverage = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minMaxLengthAverage([6, 9, 15, -2, 92, 11])).toEqual([-2, 92, 6, 21.833333333333332]);
        expect(minMaxLengthAverage([30, 43, 20, 92, 3, 74])).toEqual([3, 92, 6, 43.666666666666664]);
        expect(minMaxLengthAverage([4.54, 8.32, 5.2])).toEqual([4.54, 8.32, 3, 6.02]);
        expect(minMaxLengthAverage([0, 0, 0, 0, 0])).toEqual([0, 0, 5, 0]);
        expect(minMaxLengthAverage([3])).toEqual([3, 3, 1, 3]);
        expect(minMaxLengthAverage([0.345, 0.452, 0.543, 0.652, 0.8167])).toEqual([0.345, 0.8167, 5, 0.56174]);
        expect(minMaxLengthAverage([17, 31, 9876, 5438, 2])).toEqual([2, 9876, 5, 3072.8]);
        expect(minMaxLengthAverage([20, 40, 60, 98])).toEqual([20, 98, 4, 54.5]);
        expect(minMaxLengthAverage([2, 3, 4, 5, 6, 7])).toEqual([2, 7, 6, 4.5]);
        expect(minMaxLengthAverage([4532, 6543, 8769, 4528, 8745])).toEqual([4528, 8769, 5, 6623.4]);
    });
});
