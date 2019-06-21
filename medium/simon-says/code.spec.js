const simonSays = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])).toEqual(true);
        expect(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3])).toEqual(false);
        expect(simonSays([1, 2], [5, 1])).toEqual(true);
        expect(simonSays([1, 2], [5, 5])).toEqual(false);
        expect(simonSays([1, 2, 3], [0, 1, 2])).toEqual(true);
    });
});
