const stretchTruth = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(stretchTruth(1, '1', [])).toEqual(1);
        expect(stretchTruth(1, '1', [1, '1'])).toEqual(3);
        expect(stretchTruth(1, '1', [1, 1, '1'])).toEqual(4);
        expect(stretchTruth(1, '1', [1, '1', '1'])).toEqual(4);
        expect(stretchTruth(1, '1', [1, '1', '1', '1', '1', '1', '1'])).toEqual(8);
        expect(stretchTruth(1, 'Sometimes We Stretch the Truth', ['1', 'Sometimes We Stretch the Truth'])).toEqual(2);
        expect(stretchTruth(1, '1', [2, 3])).toEqual(1);
        expect(stretchTruth(1, '1', [1, 3])).toEqual(2);
        expect(stretchTruth(1, '1', ['1', 3])).toEqual(2);
        expect(stretchTruth(1, '-1', ['-1', '-2', -1, 's', 1, 1])).toEqual(4);
        expect(stretchTruth(1, '-1', ['-1', '-2', -1, 's', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '-1'])).toEqual(14);
    });
});
