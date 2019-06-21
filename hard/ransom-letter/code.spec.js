const canBuild = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canBuild('aPPleAL', 'PAL')).toEqual(true);
        expect(canBuild('OAT', 'OAT')).toEqual(true);
        expect(canBuild('maybelLINE', 'maybe')).toEqual(true);
        expect(canBuild('topsh', 'shop')).toEqual(true);
        expect(canBuild('topshSHP', 'SHoP')).toEqual(true);
        expect(canBuild('DAISIES', 'SAID')).toEqual(true);
        expect(canBuild('ToporP', 'porT')).toEqual(true);
        expect(canBuild('PoTluCK', 'PuCK')).toEqual(true);
        expect(canBuild('pATS', 'p')).toEqual(true);
        expect(canBuild('blah', '')).toEqual(true);
        expect(canBuild('aPPleAL', 'apple')).toEqual(false);
        expect(canBuild('shortCAKE', 'cakey')).toEqual(false);
        expect(canBuild('maybeLINE', 'lINE')).toEqual(false);
        expect(canBuild('teaPOT', 'lINE')).toEqual(false);
        expect(canBuild('', 'a')).toEqual(false);
        expect(canBuild('a', 'aA')).toEqual(false);
        expect(canBuild('a', 'A')).toEqual(false);
        expect(canBuild('AAAAAA', 'AAAAAAa')).toEqual(false);
        expect(canBuild('apple', 'appleY')).toEqual(false);
        expect(canBuild('xxYYzZ', 'zzZxYxY')).toEqual(false);
        expect(canBuild('abCD', 'aBCD')).toEqual(false);
    });
});
