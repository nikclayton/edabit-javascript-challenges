const samplesFromCurve = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(samplesFromCurve(2, 'linear')).toEqual([0, 1]);
        expect(samplesFromCurve(3, 'linear')).toEqual([0, 0.5, 1]);
        expect(samplesFromCurve(11, 'linear')).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
        expect(samplesFromCurve(4, 'pow')).toEqual([0, 0.11, 0.44, 1]);
        expect(samplesFromCurve(5, 'pow')).toEqual([0, 0.06, 0.25, 0.56, 1]);
        expect(samplesFromCurve(11, 'pow')).toEqual([0, 0.01, 0.04, 0.09, 0.16, 0.25, 0.36, 0.49, 0.64, 0.81, 1]);
        expect(samplesFromCurve(6, 'sqrt')).toEqual([0, 0.45, 0.63, 0.77, 0.89, 1]);
        expect(samplesFromCurve(7, 'sqrt')).toEqual([0, 0.41, 0.58, 0.71, 0.82, 0.91, 1]);
        expect(samplesFromCurve(11, 'sqrt')).toEqual([0, 0.32, 0.45, 0.55, 0.63, 0.71, 0.77, 0.84, 0.89, 0.95, 1]);
    });
});
