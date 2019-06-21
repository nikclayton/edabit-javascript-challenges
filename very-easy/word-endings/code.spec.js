const addEnding = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly')).toEqual(['cleverly', 'meekly', 'hurriedly', 'nicely']);
        expect(addEnding(['new', 'pander', 'scoop'], 'er')).toEqual(['newer', 'panderer', 'scooper']);
        expect(addEnding(['bend', 'sharpen', 'mean'], 'ing')).toEqual(['bending', 'sharpening', 'meaning']);
        expect(addEnding(['bend', 'tooth', 'mint'], 'y')).toEqual(['bendy', 'toothy', 'minty']);
        expect(addEnding(['bend', 'tooth', 'mint'], 'ier')).toEqual(['bendier', 'toothier', 'mintier']);
    });
});
