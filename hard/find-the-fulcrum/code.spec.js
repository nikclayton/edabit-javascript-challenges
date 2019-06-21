const findFulcrum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(findFulcrum([1, 2, 4, 9, 10, -10, -9, 3])).toEqual(4);
        expect(findFulcrum([9, 1, 9])).toEqual(1);
        expect(findFulcrum([7, -1, 0, -1, 1, 1, 2, 3])).toEqual(0);
        expect(findFulcrum([8, 8, 8, 8])).toEqual(-1);
        expect(findFulcrum([9, 3, 4, 8, 1])).toEqual(-1);
        expect(findFulcrum([1, -1, 10, 5, -4, -1])).toEqual(10);
    });
});
