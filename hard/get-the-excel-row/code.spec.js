const row = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(row('A')).toEqual(1);
        expect(row('B')).toEqual(2);
        expect(row('Z')).toEqual(26);
        expect(row('AA')).toEqual(27);
        expect(row('BA')).toEqual(53);
        expect(row('BB')).toEqual(54);
        expect(row('CW')).toEqual(101);
        expect(row('DD')).toEqual(108);
        expect(row('PQ')).toEqual(433);
        expect(row('ZZ')).toEqual(702);
        expect(row('ABC')).toEqual(731);
        expect(row('ZZT')).toEqual(18272);
        expect(row('STVW')).toEqual(348059);
    });
});
