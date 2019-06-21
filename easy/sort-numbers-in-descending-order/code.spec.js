const sortDecending = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortDecending(123)).toEqual(321);
        expect(sortDecending(670276097)).toEqual(977766200);
        expect(sortDecending(2619805)).toEqual(9865210);
        expect(sortDecending(81294)).toEqual(98421);
        expect(sortDecending(0)).toEqual(0);
        expect(sortDecending(321)).toEqual(321);
        expect(sortDecending(628904)).toEqual(986420);
        expect(sortDecending(289327560)).toEqual(987653220);
        expect(sortDecending(6456)).toEqual(6654);
        expect(sortDecending(444111888555333)).toEqual(888555444333111);
    });
});
