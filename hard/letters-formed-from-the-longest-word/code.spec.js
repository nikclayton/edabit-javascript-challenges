const canForm = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canForm(['mast', 'manifest', 'met', 'fan'])).toEqual(true);
        expect(canForm(['may', 'master', 'same', 'reams'])).toEqual(false);
        expect(canForm(['may', 'same', 'reams', 'mastery'])).toEqual(true);
        expect(canForm(['kerfuffle', 'fluke', 'fluff', 'ruffle'])).toEqual(true);
        expect(canForm(['monument', 'momento', 'moment', 'tome'])).toEqual(false);
        expect(canForm(['shape', 'shapers', 'raps', 'saps'])).toEqual(true);
    });
});
