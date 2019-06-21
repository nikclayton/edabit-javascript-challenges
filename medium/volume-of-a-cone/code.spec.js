const coneVolume = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(coneVolume(3, 2)).toEqual(12.57);
        expect(coneVolume(15, 6)).toEqual(565.49);
        expect(coneVolume(18, 0)).toEqual(0);
        expect(coneVolume(100, 2)).toEqual(418.88);
        expect(coneVolume(1, 1)).toEqual(1.05);
        expect(coneVolume(0, 30)).toEqual(0);
    });
});
