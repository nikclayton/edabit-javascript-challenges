const switchNotation = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(switchNotation([3, 55, 55551], 'normal')).toEqual([3, 10, 21]);
        expect(switchNotation([553, 55, 51], 'normal')).toEqual([13, 10, 6]);
        expect(switchNotation([51], 'normal')).toEqual([6]);
        expect(switchNotation([555, 55, 5], 'normal')).toEqual([15, 10, 5]);
        expect(switchNotation([15, 29, 5, 3], 'tally')).toEqual([555, 555554, 5, 3]);
        expect(switchNotation([3, 8, 8, 6], 'tally')).toEqual([3, 53, 53, 51]);
        expect(switchNotation([3, 44, 8, 21], 'tally')).toEqual([3, 555555554, 53, 55551]);
    });
});
