const convertBinary = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(convertBinary('house')).toEqual('01110');
        expect(convertBinary('excLAIM')).toEqual('0100000');
        expect(convertBinary('moon')).toEqual('0111');
        expect(convertBinary('MOOn')).toEqual('0111');
        expect(convertBinary('topsyTurvy')).toEqual('1111111111');
    });
});
