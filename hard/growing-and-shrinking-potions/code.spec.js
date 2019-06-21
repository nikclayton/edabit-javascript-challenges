const afterPotion = require('./code');

describe('Tests', () => {
    test('it should work without any potions', () => {
        expect(afterPotion('567')).toEqual('567');
    });

test('it should work with both potions', () => {
        expect(afterPotion('3A78B51')).toEqual('47751');
    });
    
    test('the tests', () => {
        expect(afterPotion('9999B')).toEqual('9998');
        expect(afterPotion('9A123')).toEqual('10123');
        expect(afterPotion('1A2A3A4A')).toEqual('2345');
        expect(afterPotion('9B8B7B6A')).toEqual('8767');
    });
});
