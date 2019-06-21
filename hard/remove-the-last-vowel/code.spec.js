const removeLastVowel = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeLastVowel('Those who dare to fail miserably can achieve greatly.')).toEqual('Thos wh dar t fal miserbly cn achiev gretly.');
        expect(removeLastVowel('Love is a serious mental disease.')).toEqual('Lov s  serios mentl diseas.');
        expect(removeLastVowel('Get busy living or get busy dying.')).toEqual('Gt bsy livng r gt bsy dyng.');
        expect(removeLastVowel('If you want to live a happy life, tie it to a goal, not to people.')).toEqual('f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.');
    });
});
