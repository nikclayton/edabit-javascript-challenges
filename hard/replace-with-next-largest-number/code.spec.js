const replaceNextLargest = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(replaceNextLargest([5, 7, 3, 2, 8])).toEqual([7, 8, 5, 3, -1]);
        expect(replaceNextLargest([4, 1, 6, -7, -8, 2])).toEqual([6, 2, -1, 1, -7, 4]);
        expect(replaceNextLargest([2, 3, 4, 5])).toEqual([3, 4, 5, -1]);
        expect(replaceNextLargest([1, 0, -1, 8, -72])).toEqual([8, 1, 0, -1, -1]);
    });
});
