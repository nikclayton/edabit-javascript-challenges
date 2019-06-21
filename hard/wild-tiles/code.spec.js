const canBuild = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canBuild('quavers', ['S', 'U', 'Q', 'V', 'A', '#', '#'])).toEqual(true);
        expect(canBuild('move', ['M', 'U', 'T', 'V', 'E', 'J', '#'])).toEqual(true);
        expect(canBuild('banter', ['N', 'E', 'B', 'N', '#', 'A', 'T'])).toEqual(true);
        expect(canBuild('snake', ['S', 'K', 'E', 'N', 'V', 'J', 'A'])).toEqual(true);
        expect(canBuild('move', ['M', 'U', 'T', 'V', 'E', 'J', 'S'])).toEqual(false);
        expect(canBuild('sharp', ['S', 'K', 'H', '#', '#', 'F', 'F'])).toEqual(false);
        expect(canBuild('more', ['M', 'R', 'I', 'E', 'U', 'S', 'F'])).toEqual(false);
        expect(canBuild('talker', ['#', '#', 'Z', 'V', 'P', 'A', 'K'])).toEqual(false);
        expect(canBuild('talker', ['#', '#', 'T', 'T', 'A', 'A', 'L'])).toEqual(false);
        expect(canBuild('brain', ['#', 'S', 'B', 'B', 'I', 'I', '#'])).toEqual(false);
    });
});
