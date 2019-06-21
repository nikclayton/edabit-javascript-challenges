const canPlay = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canPlay(['yellow 3', 'yellow 5', 'red 8'], 'red 2')).toEqual(true);
        expect(canPlay(['yellow 3', 'yellow 5', 'red 8'], 'blue 5')).toEqual(true);
        expect(canPlay(['yellow 3', 'blue 5', 'red 8', 'red 9'], 'green 4')).toEqual(false);
        expect(canPlay(['yellow 3', 'red 8'], 'green 2')).toEqual(false);
        expect(canPlay(['yellow 5', 'yellow 8', 'red 0', 'blue 0', 'green 4'], 'green 2')).toEqual(true);
        expect(canPlay([], 'green 2')).toEqual(false);
        expect(canPlay(['red 2'], 'red 0')).toEqual(true);
        expect(canPlay(['red 2', 'red 8', 'red 5'], 'blue 1')).toEqual(false);
    });
});
