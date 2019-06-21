const AlphabetSoup = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(AlphabetSoup('hello')).toEqual('ehllo');
        expect(AlphabetSoup('edabit')).toEqual('abdeit');
        expect(AlphabetSoup('hacker')).toEqual('acehkr');
        expect(AlphabetSoup('geek')).toEqual('eegk');
        expect(AlphabetSoup('javascript')).toEqual('aacijprstv');
        expect(AlphabetSoup('credibility')).toEqual('bcdeiiilrty');
        expect(AlphabetSoup('apostrophe')).toEqual('aehoopprst');
        expect(AlphabetSoup('determination')).toEqual('adeeiimnnortt');
        expect(AlphabetSoup('win')).toEqual('inw');
        expect(AlphabetSoup('synthesis')).toEqual('ehinsssty');
    });
});
