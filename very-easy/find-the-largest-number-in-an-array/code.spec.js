const findLargestNum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(findLargestNum([4, 5, 1, 3])).toEqual(5);
        expect(findLargestNum([13, 27, 18, 26])).toEqual(27);
        expect(findLargestNum([32, 35, 37, 39])).toEqual(39);
        expect(findLargestNum([1000, 1001, 857, 1])).toEqual(1001);
        expect(findLargestNum([27364, 837363, 736736, 73635])).toEqual(837363);
        expect(findLargestNum([30, 2, 40, 3])).toEqual(40);
        expect(findLargestNum([0, 1, 0, 0, 1])).toEqual(1);
    });
});
