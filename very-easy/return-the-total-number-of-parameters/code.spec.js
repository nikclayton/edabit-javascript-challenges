const numberArgs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numberArgs('a', 'b', 'c')).toEqual(3);
        expect(numberArgs(10, 20, 30, 40, 50)).toEqual(5);
        expect(numberArgs('x', 'y')).toEqual(2);
        expect(numberArgs()).toEqual(0);
    });
});
