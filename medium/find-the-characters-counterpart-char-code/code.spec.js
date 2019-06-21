const counterpartCharCode = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(counterpartCharCode('a')).toEqual(65);
        expect(counterpartCharCode('A')).toEqual(97);
        expect(counterpartCharCode('l')).toEqual(76);
        expect(counterpartCharCode('L')).toEqual(108);
        expect(counterpartCharCode('z')).toEqual(90);
        expect(counterpartCharCode('Z')).toEqual(122);
        expect(counterpartCharCode('è')).toEqual(200);
        expect(counterpartCharCode('È')).toEqual(232);
        expect(counterpartCharCode('Œ')).toEqual(339);
        expect(counterpartCharCode('œ')).toEqual(338);
        expect(counterpartCharCode('Ⱥ')).toEqual(11365);
        expect(counterpartCharCode('ⱥ')).toEqual(570);
        expect(counterpartCharCode('5')).toEqual(53);
        expect(counterpartCharCode('$')).toEqual(36);
    });
});
