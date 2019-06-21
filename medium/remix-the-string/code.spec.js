const remix = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(remix('abcd', [0, 3, 1, 2])).toEqual('acdb');
        expect(remix('PlOt', [1, 3, 0, 2])).toEqual('OPtl');
        expect(remix('computer', [0, 2, 1, 5, 3, 6, 7, 4])).toEqual('cmourpte');
        expect(remix('twist', [4, 0, 1, 2, 3])).toEqual('wistt');
        expect(remix('responsibility', [0, 6, 8, 11, 10, 7, 13, 5, 3, 2, 4, 12, 1, 9])).toEqual('rtibliensyopis');
        expect(remix('Interference', [6, 9, 10, 11, 7, 3, 0, 2, 5, 1, 8, 4])).toEqual('enrfeeIrcnte');
        expect(remix('sequence', [5, 7, 3, 4, 0, 1, 2, 6])).toEqual('encqusee');
    });
});
