const completeBracelet = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(completeBracelet([1, 2, 2, 1, 2, 2])).toEqual(true);
        expect(completeBracelet([5, 1, 2, 2])).toEqual(false);
        expect(completeBracelet([5, 5, 5])).toEqual(false);
        expect(completeBracelet([5, 5, 7, 7])).toEqual(false);
        expect(completeBracelet([5, 5, 7, 7, 5, 5, 7, 7])).toEqual(true);
        expect(completeBracelet([1, 2, 1, 2, 1, 2])).toEqual(true);
        expect(completeBracelet([1, 2, 2, 2, 1, 2, 2])).toEqual(false);
        expect(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2])).toEqual(true);
        expect(completeBracelet([5, 2, 5, 5, 2, 5, 2, 5, 2, 2, 5, 2, 5, 2, 5, 5, 2, 5, 2, 5, 2, 2, 5, 2])).toEqual(true);
        expect(completeBracelet([1, 2, 3, 3, 1, 2, 3, 3])).toEqual(true);
        expect(completeBracelet([1, 2, 1, 2, 1, 2, 1, 2])).toEqual(true);
        expect(completeBracelet([1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7])).toEqual(true);
        expect(completeBracelet([4, 4, 3, 4, 4, 4, 4, 3, 4, 4])).toEqual(true);
        expect(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1])).toEqual(false);
        expect(completeBracelet([1, 1, 6, 1, 1, 7])).toEqual(false);
        expect(completeBracelet([5, 5])).toEqual(false);
    });
});
