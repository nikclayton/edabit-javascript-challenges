const pentagonal = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(pentagonal(1)).toEqual(1);
        expect(pentagonal(3)).toEqual(16);
        expect(pentagonal(8)).toEqual(141);
        expect(pentagonal(10)).toEqual(226);
        expect(pentagonal(15)).toEqual(526);
        expect(pentagonal(33)).toEqual(2641);
        expect(pentagonal(43)).toEqual(4516);
        expect(pentagonal(13)).toEqual(391);
        expect(pentagonal(50)).toEqual(6126);
        expect(pentagonal(62)).toEqual(9456);
        expect(pentagonal(21)).toEqual(1051);
    });
});
