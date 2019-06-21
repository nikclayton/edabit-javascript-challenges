const matchHouses = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(matchHouses(1)).toEqual(6);
        expect(matchHouses(0)).toEqual(0);
        expect(matchHouses(17)).toEqual(86);
        expect(matchHouses(36)).toEqual(181);
        expect(matchHouses(15)).toEqual(76);
        expect(matchHouses(99)).toEqual(496);
        expect(matchHouses(3)).toEqual(16);
        expect(matchHouses(87)).toEqual(436);
    });
});
