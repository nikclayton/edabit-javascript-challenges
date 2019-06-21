const firstIndex = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(firstIndex('68 65 6c 6c 6f 20 77 6f 72 6c 64', 'world')).toEqual(6);
        expect(firstIndex('47 6f 6f 64 62 79 65 20 77 6f 72 6c 64', 'world')).toEqual(8);
        expect(firstIndex('74 68 65 20 6e 65 65 64 6c 65 20 69 73 20 74 6f 20 62 65 20 66 6f 75 6e 64', 'needle')).toEqual(4);
        expect(firstIndex('a3 24 25 2d 2d 2d a3 24 20 77 6f 72 6c 64 2d 2d 2d', 'world')).toEqual(9);
        expect(firstIndex('42 6f 72 65 64 20 77 6f 72 6c 64', 'Bored')).toEqual(0);
    });
});
