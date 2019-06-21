const same = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(same([1, 3, 4, 4, 4], [2, 5, 7])).toEqual(true);
        expect(same([9, 8, 7, 6], [4, 4, 3, 1])).toEqual(false);
        expect(same([2], [3, 3, 3, 3, 3])).toEqual(true);
        expect(same([5, 6, 7, 9], [4, 1])).toEqual(false);
        expect(same([5, 9, 9], [9, 5])).toEqual(true);
        expect(same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4])).toEqual(true);
        expect(same([], [])).toEqual(true);
    });
});
