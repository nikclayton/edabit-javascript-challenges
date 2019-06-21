const tune = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(tune([329.63, 246.94, 196, 146.83, 110, 82.41])).toEqual(['OK', 'OK', 'OK', 'OK', 'OK', 'OK']);
        expect(tune([0, 0, 190, 0, 110, 0])).toEqual([' - ', ' - ', '>>•', ' - ', 'OK', ' - ']);
        expect(tune([331, 248, 195, 147, 110, 84])).toEqual(['OK', 'OK', '>•', 'OK', 'OK', '•<']);
        expect(tune([0, 246.94, 0, 0, 0, 80])).toEqual([' - ', 'OK', ' - ', ' - ', ' - ', '>>•']);
        expect(tune([329, 246, 195, 146, 111, 82])).toEqual(['OK', 'OK', '>•', '>•', '•<', 'OK']);
    });
});
