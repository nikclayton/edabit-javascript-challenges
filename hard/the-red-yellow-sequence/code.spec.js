const rySeq = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(rySeq(2, 'all')).toEqual(5);
        expect(rySeq(1, 'yellow')).toEqual(0);
        expect(rySeq(1, 'blue')).toEqual(false);
        expect(rySeq(28, 'red')).toEqual(55);
        expect(rySeq(6, 'all')).toEqual(61);
        expect(rySeq(3)).toEqual(false);
        expect(rySeq(0, 'all')).toEqual(0);
        expect(rySeq(22, 'all')).toEqual(925);
        expect(rySeq(28, 'yellow')).toEqual(1458);
        expect(rySeq(23, 'red')).toEqual(45);
        expect(rySeq(150, 'all')).toEqual(44701);
        expect(rySeq(30, 'yellow')).toEqual(1682);
        expect(rySeq(1000, 'red')).toEqual(1999);
        expect(rySeq(28, 'green')).toEqual(false);
    });
});
