const isAutomorphic = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isAutomorphic(0)).toEqual(true);
        expect(isAutomorphic(1)).toEqual(true);
        expect(isAutomorphic(5)).toEqual(true);
        expect(isAutomorphic(6)).toEqual(true);
        expect(isAutomorphic(25)).toEqual(true);
        expect(isAutomorphic(76)).toEqual(true);
        expect(isAutomorphic(7109376)).toEqual(true);
        expect(isAutomorphic(36)).toEqual(false);
        expect(isAutomorphic(100)).toEqual(false);
        expect(isAutomorphic(11)).toEqual(false);
        expect(isAutomorphic(6025)).toEqual(false);
        expect(isAutomorphic(3)).toEqual(false);
        expect(isAutomorphic(1376)).toEqual(false);
    });
});
