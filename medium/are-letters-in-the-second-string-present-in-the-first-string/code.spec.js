const letterCheck = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(letterCheck(['trances', 'nectar'])).toEqual(true);
        expect(letterCheck(['THE EYES', 'they see'])).toEqual(true);
        expect(letterCheck(['assert', 'staring'])).toEqual(false);
        expect(letterCheck(['arches', 'later'])).toEqual(false);
        expect(letterCheck(['dale', 'caller'])).toEqual(false);
        expect(letterCheck(['parses', 'parsecs'])).toEqual(false);
        expect(letterCheck(['replays', 'adam'])).toEqual(false);
        expect(letterCheck(['mastering', 'streaming'])).toEqual(true);
        expect(letterCheck(['drapes', 'compadres'])).toEqual(false);
        expect(letterCheck(['deltas', 'slated'])).toEqual(true);
    });
});
