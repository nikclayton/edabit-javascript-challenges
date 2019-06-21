const flipEndChars = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(flipEndChars('Cat, dog, and mouse.')).toEqual('.at, dog, and mouseC');
        expect(flipEndChars('Anna, Banana')).toEqual('anna, BananA');
        expect(flipEndChars('[]')).toEqual('][');
        expect(flipEndChars('')).toEqual('Incompatible.');
        expect(flipEndChars([1, 2, 3])).toEqual('Incompatible.');
        expect(flipEndChars('dfdkf49824fdfdfjhd')).toEqual('Two\'s a pair.');
        expect(flipEndChars('#343473847#')).toEqual('Two\'s a pair.');
    });
});
