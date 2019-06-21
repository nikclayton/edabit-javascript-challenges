const mirror = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mirror([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 4, 3, 2, 1]);
        expect(mirror([0, 2, 4, 6])).toEqual([0, 2, 4, 6, 4, 2, 0]);
        expect(mirror([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 2, 3, 3, 4, 3, 3, 2, 2, 1]);
    });
});
