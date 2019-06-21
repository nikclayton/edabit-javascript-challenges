const asciiCapitalize = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(asciiCapitalize('Oh what a beautiful morning.')).toEqual('oH wHaT a BeauTiFuL moRNiNg.');
        expect(asciiCapitalize('THE LITTLE MERMAID')).toEqual('THe LiTTLe meRmaiD');
        expect(asciiCapitalize('to be or not to be!')).toEqual('To Be oR NoT To Be!');
    });
});
