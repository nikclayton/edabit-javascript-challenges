const isBetween = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isBetween('apple', 'banana', 'azure')).toEqual(true);
        expect(isBetween('bookcase', 'zebra', 'squid')).toEqual(true);
        expect(isBetween('shrapnel', 'tapenade', 'tally')).toEqual(true);
        expect(isBetween('monk', 'monument', 'monkey')).toEqual(true);
        expect(isBetween('oath', 'ostrich', 'osteoporosis')).toEqual(true);
        expect(isBetween('ostracize', 'ostrich', 'open')).toEqual(false);
        expect(isBetween('bookend', 'boolean', 'boost')).toEqual(false);
        expect(isBetween('tamer', 'tanner', 'timid')).toEqual(false);
        expect(isBetween('rhino', 'sorcerer', 'quote')).toEqual(false);
        expect(isBetween('body', 'lung', 'ace')).toEqual(false);
    });
});
