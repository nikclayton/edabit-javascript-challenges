const wave = require('./code');

describe('Tests', () => {
    test('Ignore spaces.', () => {
        expect(wave('dogs cats pigs')).toEqual(['Dogs cats pigs', 'dOgs cats pigs', 'doGs cats pigs', 'dogS cats pigs', 'dogs Cats pigs', 'dogs cAts pigs', 'dogs caTs pigs', 'dogs catS pigs', 'dogs cats Pigs', 'dogs cats pIgs', 'dogs cats piGs', 'dogs cats pigS']);
    });

test('Ignore spaces.', () => {
        expect(wave(' ')).toEqual([]);
    });

test('An empty string should return an empty array.', () => {
        expect(wave('')).toEqual([]);
    });

test('Space at the beginning.', () => {
        expect(wave(' blue')).toEqual([' Blue', ' bLue', ' blUe', ' bluE']);
    });

test('Space at the end.', () => {
        expect(wave('green ')).toEqual(['Green ', 'gReen ', 'grEen ', 'greEn ', 'greeN ']);
    });
    
    test('the tests', () => {
        expect(wave('edabit')).toEqual(['Edabit', 'eDabit', 'edAbit', 'edaBit', 'edabIt', 'edabiT']);
        expect(wave('g')).toEqual(['G']);
    });
});
