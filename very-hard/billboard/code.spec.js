const canPut = require('./code');

describe('Tests', () => {
    test('cannot fit leaving a space in', () => {
        expect(canPut('HEY JUDE', [1, 7])).toEqual(false);
    });

test('JUDE cannot fit on second row', () => {
        expect(canPut('HEY JUDE', [4, 3])).toEqual(false);
    });

test('L8R cannot fit on second row', () => {
        expect(canPut('CU L8R', [2, 2])).toEqual(false);
    });

test('cannot fit leaving a space in', () => {
        expect(canPut('CU L8R', [1, 5])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(canPut('HEY JUDE', [2, 4])).toEqual(true);
        expect(canPut('HEY JUDE', [1, 8])).toEqual(true);
        expect(canPut('CU L8R', [5, 5])).toEqual(true);
        expect(canPut('BEAUTY IS WITHIN', [3, 6])).toEqual(true);
        expect(canPut('BEAUTY IS WITHIN', [4, 5])).toEqual(false);
    });
});
