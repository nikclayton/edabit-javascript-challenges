const rolls = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(rolls([1, 2, 3])).toEqual(4);
        expect(rolls([2, 6, 2, 5])).toEqual(17);
        expect(rolls([6, 1, 1])).toEqual(8);
        expect(rolls([5, 1, 6, 1, 6])).toEqual(8);
        expect(rolls([1, 1, 1])).toEqual(1);
        expect(rolls([1, 1, 3, 1, 1])).toEqual(2);
        expect(rolls([1, 1, 1, 1, 1])).toEqual(1);
        expect(rolls([6, 6, 6])).toEqual(30);
    });
});
