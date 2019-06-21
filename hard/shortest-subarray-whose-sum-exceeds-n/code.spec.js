const minLength = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minLength([5, 10, 2, -1, 3, 4], 9)).toEqual(1);
        expect(minLength([3, -1, 4, -2, -7, 2], 4)).toEqual(3);
        expect(minLength([-5, 3, 2, 7, 8, 9, -1, 5], 16)).toEqual(2);
        expect(minLength([1, 0, -1, 1, 1], 1)).toEqual(2);
        expect(minLength([1, 0, 1, 1, -1, 0, 1], 2)).toEqual(4);
        expect(minLength([1, 0, 0, 0, 1], 1)).toEqual(5);
        expect(minLength([1, 0, 1, 0, 1], 1)).toEqual(3);
        expect(minLength([-1, 1, 1, 0, 1, 1], 3)).toEqual(5);
        expect(minLength([3, -1, 4, 3, 0, 1, 2], 7)).toEqual(4);
        expect(minLength([0, 1, 1, 0], 2)).toEqual(-1);
        expect(minLength([0, 1, 5, 2, 0], 10)).toEqual(-1);
        expect(minLength([3, -1, 4, -2, -7, 2], 6)).toEqual(-1);
    });
});
