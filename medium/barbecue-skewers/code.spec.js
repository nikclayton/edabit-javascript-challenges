const bbqSkewers = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bbqSkewers(['--oooo-ooo--', '--xx--x--xx--', '--o---o--oo--', '--xx--x--ox--', '--xx--x--ox--'])).toEqual([2, 3]);
        expect(bbqSkewers(['--oooo-ooo--', '--xxxxxxxx--', '--o---', '-o-----o---x--', '--o---o-----'])).toEqual([3, 2]);
        expect(bbqSkewers(['--oooo-ooo--', '--ooooooo--', '--o---', '-o-----o---x--', '--o-oooo-----'])).toEqual([4, 1]);
    });
});
