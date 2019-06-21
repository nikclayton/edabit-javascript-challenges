const sumConsecutives = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sumConsecutives([0, 7, 7, 7, 5, 4, 9, 9, 0])).toEqual([0, 21, 5, 4, 18, 0]);
        expect(sumConsecutives([4, 4, 5, 6, 8, 8, 8])).toEqual([8, 5, 6, 24]);
        expect(sumConsecutives([-5, -5, 7, 7, 12, 0])).toEqual([-10, 14, 12, 0]);
        expect(sumConsecutives([2, 2, 2, 2, 2, 7])).toEqual([10, 7]);
        expect(sumConsecutives([2, 2, -4, 4, 5, 5, 6, 6, 6, 6, 6, 1])).toEqual([4, -4, 4, 10, 30, 1]);
        expect(sumConsecutives([3, 3, 3, 3, 1])).toEqual([12, 1]);
        expect(sumConsecutives([1, -1, -2, 2, 3, -3, 4, -4])).toEqual([1, -1, -2, 2, 3, -3, 4, -4]);
    });
});
