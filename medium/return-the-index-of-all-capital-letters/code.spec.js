const indexOfCaps = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(indexOfCaps('eDaBiT')).toEqual([1, 3, 5]);
        expect(indexOfCaps('eQuINoX')).toEqual([1, 3, 4, 6]);
        expect(indexOfCaps('determine')).toEqual([]);
        expect(indexOfCaps('STRIKE')).toEqual([0, 1, 2, 3, 4, 5]);
        expect(indexOfCaps('sUn')).toEqual([1]);
        expect(indexOfCaps('SpiDer')).toEqual([0, 3]);
        expect(indexOfCaps('accOmpAnY')).toEqual([3, 6, 8]);
        expect(indexOfCaps('@xCE#8S#i*$en')).toEqual([2, 3, 6]);
        expect(indexOfCaps('1854036297')).toEqual([]);
        expect(indexOfCaps('Fo?.arg~{86tUx=|OqZ!')).toEqual([0, 12, 16, 18]);
    });
});
