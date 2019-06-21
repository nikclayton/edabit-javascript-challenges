const getLength = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getLength([1, [2, 3]])).toEqual(3);
        expect(getLength([1, [2, [3, 4]]])).toEqual(4);
        expect(getLength([1, [2, [3, [4, [5, 6]]]]])).toEqual(6);
        expect(getLength([1, 7, 8])).toEqual(3);
        expect(getLength([2])).toEqual(1);
        expect(getLength([2, [3], 4, [7]])).toEqual(4);
        expect(getLength([2, [3, [5, 7]], 4, [7]])).toEqual(6);
        expect(getLength([2, [3, [4, [5]]], [9]])).toEqual(5);
        expect(getLength([])).toEqual(0);
    });
});
