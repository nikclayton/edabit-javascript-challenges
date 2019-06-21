const howBad = require('./code');

describe('Tests', () => {
    test('666 is not evil after all!', () => {
        expect(howBad(666)).toEqual(['Odious', 'Pernicious']);
    });
    
    test('the tests', () => {
        expect(howBad(7)).toEqual(['Odious', 'Pernicious']);
        expect(howBad(97)).toEqual(['Odious', 'Pernicious']);
        expect(howBad(66)).toEqual(['Evil', 'Pernicious']);
        expect(howBad(77)).toEqual(['Evil']);
        expect(howBad(128)).toEqual(['Odious']);
        expect(howBad(987654321)).toEqual(['Odious', 'Pernicious']);
        expect(howBad(98765)).toEqual(['Evil']);
    });
});
