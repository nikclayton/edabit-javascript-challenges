const insertWhitespace = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(insertWhitespace('SheWalksToTheBeach')).toEqual('She Walks To The Beach');
        expect(insertWhitespace('MarvinTalksTooMuch')).toEqual('Marvin Talks Too Much');
        expect(insertWhitespace('HopelesslyDevotedToYou')).toEqual('Hopelessly Devoted To You');
        expect(insertWhitespace('EvenTheBestFallDownSometimes')).toEqual('Even The Best Fall Down Sometimes');
        expect(insertWhitespace('TheGreatestUpsetInHistory')).toEqual('The Greatest Upset In History');
    });
});
