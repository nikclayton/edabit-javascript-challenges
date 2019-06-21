const isAlphabeticallySorted = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isAlphabeticallySorted('Paula has a French accent.')).toEqual(true);
        expect(isAlphabeticallySorted('The biopsy returned negative results.')).toEqual(true);
        expect(isAlphabeticallySorted('She sells sea shells by the sea shore.')).toEqual(false);
        expect(isAlphabeticallySorted('She almost reached the top of Mt. Everest.')).toEqual(true);
        expect(isAlphabeticallySorted('She was happy with how her earring hoops looked.')).toEqual(true);
        expect(isAlphabeticallySorted('Beth dislikes eating starfruit but enjoys cherries.')).toEqual(false);
        expect(isAlphabeticallySorted('Elinor is inside on a rainy day sipping hot chocolate.')).toEqual(true);
        expect(isAlphabeticallySorted('Mara took a photograph.')).toEqual(false);
    });
});
