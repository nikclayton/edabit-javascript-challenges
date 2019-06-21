const canCapture = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canCapture(['A8', 'E8'])).toEqual(true);
        expect(canCapture(['A1', 'B2'])).toEqual(false);
        expect(canCapture(['H4', 'H3'])).toEqual(true);
        expect(canCapture(['F5', 'C8'])).toEqual(false);
        expect(canCapture(['G3', 'G7'])).toEqual(true);
        expect(canCapture(['B3', 'B2'])).toEqual(true);
        expect(canCapture(['F5', 'B2'])).toEqual(false);
        expect(canCapture(['H5', 'C8'])).toEqual(false);
    });
});
