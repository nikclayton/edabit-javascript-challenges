const depth = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(depth([1, 2, 3, 4])).toEqual(1);
        expect(depth([1, [2, 3, 4]])).toEqual(2);
        expect(depth([1, [2, [3, 4]]])).toEqual(3);
        expect(depth([1, [2, [3, [4]]]])).toEqual(4);
        expect(depth([1, [2, [3, [4]]], 4])).toEqual(4);
        expect(depth([1, [2], 3, [4], 5, [6]])).toEqual(2);
        expect(depth([1, 2, 3, 4, [[5]], [6], 7])).toEqual(3);
    });
});
