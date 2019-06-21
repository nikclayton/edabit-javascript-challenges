const smallest = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(smallest(3, 8)).toEqual(104);
        expect(smallest(5, 12)).toEqual(10008);
        expect(smallest(7, 1)).toEqual(1000000);
        expect(smallest(2, 3)).toEqual(12);
        expect(smallest(9, 33)).toEqual(100000032);
        expect(smallest(8, 17)).toEqual(10000012);
        expect(smallest(4, 67)).toEqual(1005);
        expect(smallest(4, 432)).toEqual(1296);
        expect(smallest(3, 432)).toEqual(432);
        expect(smallest(3, 77)).toEqual(154);
    });
});
