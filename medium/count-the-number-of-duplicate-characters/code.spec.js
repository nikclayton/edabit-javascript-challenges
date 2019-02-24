const duplicateCount = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(duplicateCount('abcde')).toEqual(0);
        expect(duplicateCount('aabbcde')).toEqual(2);
        expect(duplicateCount('aabbcdeB')).toEqual(2);
        expect(duplicateCount('indivisibility')).toEqual(1);
        expect(duplicateCount('Indivisibilities')).toEqual(2);
        expect(duplicateCount('aa1112')).toEqual(2);
        expect(duplicateCount('bb2c')).toEqual(1);
    });
});
