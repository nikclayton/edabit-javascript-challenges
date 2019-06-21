const removeSpecialCharacters = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeSpecialCharacters('The quick brown fox!')).toEqual('The quick brown fox');
        expect(removeSpecialCharacters('%fd76$fd(-)6GvKlO.')).toEqual('fd76fd-6GvKlO');
        expect(removeSpecialCharacters('D0n$c sed 0di0 du1')).toEqual('D0nc sed 0di0 du1');
        expect(removeSpecialCharacters('cat_pic.jpeg')).toEqual('cat_picjpeg');
        expect(removeSpecialCharacters('519-555-8093')).toEqual('519-555-8093');
        expect(removeSpecialCharacters('h-d+=rf[]_{}<>.,`~!@#$%^&*(|)')).toEqual('h-drf_');
        expect(removeSpecialCharacters('Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???')).toEqual('Etiam porta sem malesu-ada magna mollis euismod');
    });
});
