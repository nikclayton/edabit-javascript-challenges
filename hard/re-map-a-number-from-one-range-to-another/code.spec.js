const remap = require('./code');

describe('Tests', () => {
    test('The input range is 0.', () => {
        expect(remap(0, 0, 0, 0, 0)).toEqual(0);
    });

test('The input range is 0.', () => {
        expect(remap(17, 17, 17, 519, 1085)).toEqual(0);
    });
    
    test('the tests', () => {
        expect(remap(7, 2, 12, 0, 100)).toEqual(50);
        expect(remap(17, 5, 55, 100, 30)).toEqual(83.2);
        expect(remap(2.5, 2, 3, -80, 80)).toEqual(0);
        expect(remap(50, 1, 51, 0, 100)).toEqual(98);
        expect(remap(20, 10, 50, 50, 10)).toEqual(40);
        expect(remap(0, 5, -20, 60, 1000)).toEqual(248);
    });
});
