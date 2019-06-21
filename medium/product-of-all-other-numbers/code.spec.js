const getProducts = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getProducts([1, 2, 6, 5, 9])).toEqual([540, 270, 90, 108, 60]);
        expect(getProducts([1, 7, 3, 4])).toEqual([84, 12, 28, 21]);
        expect(getProducts([1, 2, 3, 0, 5])).toEqual([0, 0, 0, 30, 0]);
    });
});
