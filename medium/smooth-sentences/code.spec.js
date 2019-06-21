const isSmooth = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isSmooth('Marta appreciated deep perpendicular right trapezoids')).toEqual(true);
        expect(isSmooth('Someone is outside the doorway')).toEqual(false);
        expect(isSmooth('She eats super righteously')).toEqual(true);
        expect(isSmooth('Ben naps so often')).toEqual(true);
        expect(isSmooth('Cute triangles are cute')).toEqual(false);
        expect(isSmooth('Mad dislikes sharp pointy yoyos')).toEqual(true);
        expect(isSmooth('Rita asks Sam mean numbered dilemmas')).toEqual(true);
        expect(isSmooth('Marigold daffodils streaming happily.')).toEqual(false);
        expect(isSmooth('Simply wonderful laughing.')).toEqual(false);
    });
});
