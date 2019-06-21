const oddProduct = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(oddProduct([3, 4, 1, 1, 5])).toEqual(15);
        expect(oddProduct([5, 5, 8, 2, 4, 32])).toEqual(25);
        expect(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])).toEqual(1);
        expect(oddProduct([0, 0, 0, 1])).toEqual(1);
        expect(oddProduct([1, 2, 2, 5, 2, 0])).toEqual(5);
    });
});
