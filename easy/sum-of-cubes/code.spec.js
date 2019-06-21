const sumOfCubes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sumOfCubes([1, 5, 9])).toEqual(855);
        expect(sumOfCubes([3, 4, 5])).toEqual(216);
        expect(sumOfCubes([1, 1, 1])).toEqual(3);
        expect(sumOfCubes([2])).toEqual(8);
        expect(sumOfCubes([5, 1, 2])).toEqual(134);
        expect(sumOfCubes([32])).toEqual(32768);
        expect(sumOfCubes([5, 9, 4, 4, 9])).toEqual(1711);
        expect(sumOfCubes([0, 1, 2])).toEqual(9);
        expect(sumOfCubes([])).toEqual(0);
    });
});
