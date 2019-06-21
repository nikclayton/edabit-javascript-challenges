const canComplete = require('./code');

describe('Tests', () => {
    test('\'z\' does not exist in the word `beautiful`', () => {
        expect(canComplete('butlz', 'beautiful')).toEqual(false);
    });

test('although \'t\', \'u\', \'l\' and \'b\' incorrectly ordered', () => {
        expect(canComplete('tulb', 'beautiful')).toEqual(false);
    });

test('too many \'b\'s, beautiful has only 1', () => {
        expect(canComplete('bbutl', 'beautiful')).toEqual(false);
    });

test('out of order', () => {
        expect(canComplete('sgi', 'something')).toEqual(false);
    });

test('too many i\'s', () => {
        expect(canComplete('siing', 'something')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(canComplete('butl', 'beautiful')).toEqual(true);
        expect(canComplete('sg', 'something')).toEqual(true);
        expect(canComplete('sing', 'something')).toEqual(true);
    });
});
