const uniqueAbbrev = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(uniqueAbbrev(['s', 't', 'v'], ['stamina', 'television', 'vindaloo'])).toEqual(true);
        expect(uniqueAbbrev(['mo', 'ma', 'me'], ['moment', 'many', 'mean'])).toEqual(true);
        expect(uniqueAbbrev(['at', 'o', 'abe'], ['atom', 'original', 'abet'])).toEqual(true);
        expect(uniqueAbbrev(['rh', 'par', 're'], ['rhino', 'parry', 'residue'])).toEqual(true);
        expect(uniqueAbbrev(['ho', 'h', 'ha'], ['house', 'hope', 'happy'])).toEqual(false);
        expect(uniqueAbbrev(['bi', 'ba', 'bat'], ['big', 'bard', 'battery'])).toEqual(false);
        expect(uniqueAbbrev(['b', 'c', 'ch'], ['broth', 'chap', 'cardigan'])).toEqual(false);
        expect(uniqueAbbrev(['to', 'too', 't'], ['topology', 'took', 'torrent'])).toEqual(false);
    });
});
