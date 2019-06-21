const splitCode = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(splitCode('TEWA8392')).toEqual(['TEWA', 8392]);
        expect(splitCode('MMU778')).toEqual(['MMU', 778]);
        expect(splitCode('SRPE5532')).toEqual(['SRPE', 5532]);
        expect(splitCode('SKU8977')).toEqual(['SKU', 8977]);
        expect(splitCode('MCI5589')).toEqual(['MCI', 5589]);
        expect(splitCode('WIEB3921')).toEqual(['WIEB', 3921]);
    });
});
