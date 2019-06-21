const animals = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(animals(5, 2, 8)).toEqual(50);
        expect(animals(3, 4, 7)).toEqual(50);
        expect(animals(1, 2, 3)).toEqual(22);
        expect(animals(3, 5, 2)).toEqual(34);
    });
});
