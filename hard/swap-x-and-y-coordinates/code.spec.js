const swapXY = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(swapXY('(1, 2), (3, 4)')).toEqual('(2, 1), (4, 3)');
        expect(swapXY('(11, 23), (43, 99)')).toEqual('(23, 11), (99, 43)');
        expect(swapXY('(-5, -3), (7, 4)')).toEqual('(-3, -5), (4, 7)');
        expect(swapXY('(-1095, -321), (0, -88)')).toEqual('(-321, -1095), (-88, 0)');
    });
});
