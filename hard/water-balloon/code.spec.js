const pop = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(pop([0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0])).toEqual([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]);
        expect(pop([0, 0, 0, 0, 4, 0, 0, 0, 0])).toEqual([0, 1, 2, 3, 4, 3, 2, 1, 0]);
        expect(pop([0, 0, 0, 3, 0, 0, 0])).toEqual([0, 1, 2, 3, 2, 1, 0]);
        expect(pop([0, 0, 2, 0, 0])).toEqual([0, 1, 2, 1, 0]);
        expect(pop([0, 1, 0])).toEqual([0, 1, 0]);
        expect(pop([0])).toEqual([0]);
    });
});
