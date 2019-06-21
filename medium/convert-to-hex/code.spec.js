const toHex = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(toHex('Big Boi')).toEqual('42 69 67 20 42 6f 69');
        expect(toHex('Marty Poppinson')).toEqual('4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e');
        expect(toHex('abcdefghi')).toEqual('61 62 63 64 65 66 67 68 69');
        expect(toHex('oh dear')).toEqual('6f 68 20 64 65 61 72');
        expect(toHex('i hate C#')).toEqual('69 20 68 61 74 65 20 43 23');
        expect(toHex('i love C++ , not really')).toEqual('69 20 6c 6f 76 65 20 43 2b 2b 20 2c 20 6e 6f 74 20 72 65 61 6c 6c 79');
    });
});
