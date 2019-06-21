const groupMonotonic = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(groupMonotonic([])).toEqual([]);
        expect(groupMonotonic([0])).toEqual([]);
        expect(groupMonotonic([1])).toEqual([]);
        expect(groupMonotonic([0, 1])).toEqual([]);
        expect(groupMonotonic([1, 0])).toEqual([]);
        expect(groupMonotonic([1, 1])).toEqual([]);
        expect(groupMonotonic([0, 1, 2])).toEqual([]);
        expect(groupMonotonic([2, 1, 0])).toEqual([]);
        expect(groupMonotonic([0, 2, 1])).toEqual([1]);
        expect(groupMonotonic([1, 0, 2])).toEqual([1]);
        expect(groupMonotonic([0, 1, 1, 0])).toEqual([2]);
        expect(groupMonotonic([1, 2, 3, 4, 4, 4, 3, 2, 1])).toEqual([5]);
        expect(groupMonotonic([0, 6, 10, 9, 3, -3, -9, -10, -6, 0])).toEqual([2, 7]);
    });
});
