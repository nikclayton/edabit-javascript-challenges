const canPatch = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canPatch([1, 0, 0, 1], [1])).toEqual(true);
        expect(canPatch([1, 0, 0, 1], [1, 2])).toEqual(true);
        expect(canPatch([1, 0, 0, 1], [])).toEqual(false);
        expect(canPatch([1, 0, 1, 1], [])).toEqual(true);
        expect(canPatch([1, 0, 1, 0, 1, 0, 1, 0, 1], [])).toEqual(true);
        expect(canPatch([1, 0, 0, 0, 0, 0, 0, 1], [5, 1, 2])).toEqual(true);
        expect(canPatch([1, 0, 0, 0, 0, 0, 0, 1], [4, 1, 2, 3, 4])).toEqual(false);
        expect(canPatch([1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 1])).toEqual(false);
        expect(canPatch([1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 1, 1])).toEqual(true);
        expect(canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 2])).toEqual(true);
        expect(canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1])).toEqual(false);
        expect(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1], [1, 1])).toEqual(true);
        expect(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 3, 1])).toEqual(true);
        expect(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 3, 1, 5, 5])).toEqual(true);
        expect(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 2, 2])).toEqual(false);
    });
});
