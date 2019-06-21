const maxPossible = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(maxPossible(9328, 456)).toEqual(9658);
        expect(maxPossible(523, 76)).toEqual(763);
        expect(maxPossible(9132, 5564)).toEqual(9655);
        expect(maxPossible(8732, 91255)).toEqual(9755);
        expect(maxPossible(589, 777)).toEqual(789);
        expect(maxPossible(1, 0)).toEqual(1);
        expect(maxPossible(8, 9)).toEqual(9);
        expect(maxPossible(28, 19)).toEqual(98);
        expect(maxPossible(12345, 4)).toEqual(42345);
    });
});
