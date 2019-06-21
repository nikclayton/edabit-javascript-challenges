const doesBrickFit = require('./code');

describe('Tests', () => {
    test('cube into square', () => {
        expect(doesBrickFit(1, 1, 1, 1, 1)).toEqual(true);
    });
    
    test('the tests', () => {
        expect(doesBrickFit(1, 2, 1, 1, 1)).toEqual(true);
        expect(doesBrickFit(1, 2, 2, 1, 1)).toEqual(false);
        expect(doesBrickFit(1, 2, 2, 1, 2)).toEqual(true);
        expect(doesBrickFit(1, 2, 2, 2, 1)).toEqual(true);
        expect(doesBrickFit(2, 2, 2, 1, 2)).toEqual(false);
    });
});
