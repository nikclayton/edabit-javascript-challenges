const canCapture = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canCapture(['A1', 'H8'])).toEqual(true);
        expect(canCapture(['A1', 'C2'])).toEqual(false);
        expect(canCapture(['G3', 'E5'])).toEqual(true);
        expect(canCapture(['D3', 'C2'])).toEqual(true);
        expect(canCapture(['F4', 'C1'])).toEqual(true);
        expect(canCapture(['H1', 'A7'])).toEqual(false);
        expect(canCapture(['H1', 'A8'])).toEqual(true);
        expect(canCapture(['G1', 'G2'])).toEqual(true);
        expect(canCapture(['A5', 'G5'])).toEqual(true);
        expect(canCapture(['A5', 'E2'])).toEqual(false);
    });
});
