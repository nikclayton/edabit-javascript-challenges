const canBuild = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canBuild('got 2 go', 'go go go 2 today')).toEqual(true);
        expect(canBuild('for an angel', 'angel forest nymph awaken')).toEqual(true);
        expect(canBuild('sit on top', 'its a moo point')).toEqual(true);
        expect(canBuild('solar to oven', 'love desolate rose thorn')).toEqual(true);
        expect(canBuild('gate im in', 'magnetizing')).toEqual(true);
        expect(canBuild('moreso', 'mount rushmore')).toEqual(true);
        expect(canBuild('dool', 'ken doll')).toEqual(false);
        expect(canBuild('world of make believe', 'make believe world')).toEqual(false);
        expect(canBuild('long high add or', 'highway road go long')).toEqual(false);
        expect(canBuild('fill tuck mid', 'truck falls dim')).toEqual(false);
        expect(canBuild('skin man i', 'man in mask')).toEqual(false);
        expect(canBuild('foolish prides', 'foolish pride')).toEqual(false);
    });
});
