const stepsToConvert = require('./code');

describe('Tests', () => {
    test('Return 0 if empty string.', () => {
        expect(stepsToConvert('')).toEqual(0);
    });
    
    test('the tests', () => {
        expect(stepsToConvert('abC')).toEqual(1);
        expect(stepsToConvert('abCBA')).toEqual(2);
        expect(stepsToConvert('aba')).toEqual(0);
        expect(stepsToConvert('ABA')).toEqual(0);
        expect(stepsToConvert('abaCCC')).toEqual(3);
        expect(stepsToConvert('abaaCCCDE')).toEqual(4);
        expect(stepsToConvert('CCaaCCaaCa')).toEqual(5);
    });
});
