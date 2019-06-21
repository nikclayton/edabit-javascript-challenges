const findSmallestNum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(findSmallestNum([34, 15, 88, 2])).toEqual(2);
        expect(findSmallestNum([34, -345, -1, 100])).toEqual(-345);
        expect(findSmallestNum([-76, 1.345, 1, 0])).toEqual(-76);
        expect(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])).toEqual(-0.9999);
        expect(findSmallestNum([7, 7, 7])).toEqual(7);
        expect(findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1])).toEqual(1);
        expect(findSmallestNum([-4, -6, -8, -1])).toEqual(-8);
        expect(findSmallestNum([54, 76, 23, 54])).toEqual(23);
        expect(findSmallestNum([100])).toEqual(100);
        expect(findSmallestNum([0, 1, 2, 3, 4, 5])).toEqual(0);
    });
});
