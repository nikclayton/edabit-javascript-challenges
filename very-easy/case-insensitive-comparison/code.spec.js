const match = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(match('hello', 'hELLo')).toEqual(true);
        expect(match('hey', 'hey')).toEqual(true);
        expect(match('venom', 'VENOM')).toEqual(true);
        expect(match('maGIciAN', 'magician')).toEqual(true);
        expect(match('stupIFy', 'stupifY')).toEqual(true);
        expect(match('bald', 'blad')).toEqual(false);
        expect(match('motive', 'emotive')).toEqual(false);
        expect(match('mask', 'mAskinG')).toEqual(false);
        expect(match('skim', 'skimp')).toEqual(false);
        expect(match('EXCEl', 'exceLs')).toEqual(false);
    });
});
