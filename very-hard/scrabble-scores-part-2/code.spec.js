const bestStart = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bestStart(['-', 'DW', '-', '-', '-', 'TL', '-', '-', '-', 'TL', '-', '-', '-', 'DW', '-'], 'quiz')).toEqual(0);
        expect(bestStart(['-', 'DW', '-', '-', '-', 'TL', '-', '-', '-', 'TL', '-', '-', '-', 'DW', '-'], 'quit')).toEqual(5);
        expect(bestStart(['-', 'DW', '-', '-', '-', 'TL', '-', '-', '-', 'TL', '-', '-', '-', 'DW', '-'], 'quart')).toEqual(9);
        expect(bestStart(['-', 'DW', '-', '-', '-', 'TL', '-', '-', '-', 'TL', '-', '-', '-', 'DW', '-'], 'quartz')).toEqual(0);
    });
});
