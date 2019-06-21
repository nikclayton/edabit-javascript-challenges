const repeat = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(repeat('edabit', 3)).toEqual(['edabit', 'edabit', 'edabit']);
        expect(repeat(13, 5)).toEqual([13, 13, 13, 13, 13]);
        expect(repeat('7', 2)).toEqual(['7', '7']);
        expect(repeat('2 0 1 8', 1)).toEqual(['2 0 1 8']);
        expect(repeat('tom dick and harry', 6)).toEqual(['tom dick and harry', 'tom dick and harry', 'tom dick and harry', 'tom dick and harry', 'tom dick and harry', 'tom dick and harry']);
        expect(repeat(0, 1)).toEqual([0]);
        expect(repeat(0, 0)).toEqual([]);
        expect(repeat('z', 0)).toEqual([]);
    });
});
