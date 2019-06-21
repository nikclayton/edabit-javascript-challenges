const median = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(median([20, 40, 20, 30, 50, 60, 70, 0, 20])).toEqual(30);
        expect(median([342, 98, 5456, 32, 786, 432, 890, 321])).toEqual(387);
        expect(median([1, 0, 1, 0, 0, 0, 1, 1])).toEqual(0.5);
        expect(median([32, 5, 78, 32, 4, 5, 3])).toEqual(5);
        expect(median([-20, 40, 30, -2, 40, -13])).toEqual(14);
        expect(median([32786, 7837, 83736, 83736, 10383, 738393])).toEqual(58261);
        expect(median([7685, 83736, 38376, 73638, 7337])).toEqual(38376);
        expect(median([0, 0, 0, 0])).toEqual(0);
        expect(median([-30, -42, -60, -10, -30, -50])).toEqual(-36);
        expect(median([238, 432, 897, 710])).toEqual(571);
    });
});
