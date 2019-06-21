const calcDeterminant = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(calcDeterminant([[1, 2], [3, 4]])).toEqual(-2);
        expect(calcDeterminant([[5, 3], [3, 1]])).toEqual(-4);
        expect(calcDeterminant([[1, 1], [1, 1]])).toEqual(0);
        expect(calcDeterminant([[1, 1], [1, 0]])).toEqual(-1);
    });
});
