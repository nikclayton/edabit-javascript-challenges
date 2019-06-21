const largerThanRight = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(largerThanRight([3, 13, 11, 2, 1, 9, 5])).toEqual([13, 11, 9, 5]);
        expect(largerThanRight([9, 8, 7, 6])).toEqual([9, 8, 7, 6]);
        expect(largerThanRight([1, 2, 3, 4])).toEqual([4]);
        expect(largerThanRight([5, 9, 8, 7])).toEqual([9, 8, 7]);
        expect(largerThanRight([5, 5, 5, 5, 5])).toEqual([5]);
    });
});
