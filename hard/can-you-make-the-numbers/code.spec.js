const canBuild = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [])).toEqual(true);
        expect(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 8])).toEqual(true);
        expect(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80])).toEqual(true);
        expect(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])).toEqual(true);
        expect(canBuild([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 23, 45, 6789])).toEqual(true);
        expect(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 4])).toEqual(true);
        expect(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80, 0])).toEqual(false);
        expect(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1])).toEqual(false);
        expect(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 7, 2, 22, 49, 444, 4])).toEqual(false);
        expect(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 44])).toEqual(false);
        expect(canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44])).toEqual(false);
    });
});
