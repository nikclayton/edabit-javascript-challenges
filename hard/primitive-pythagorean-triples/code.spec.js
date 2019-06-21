const isPrimPythTriple = require('./code');

describe('Tests', () => {
    test('Pythagorean triple, but not primitive', () => {
        expect(isPrimPythTriple([39, 15, 36])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(isPrimPythTriple([4, 5, 3])).toEqual(true);
        expect(isPrimPythTriple([7, 12, 13])).toEqual(false);
        expect(isPrimPythTriple([77, 36, 85])).toEqual(true);
        expect(isPrimPythTriple([35, 28, 21])).toEqual(false);
        expect(isPrimPythTriple([80, 89, 39])).toEqual(true);
    });
});
