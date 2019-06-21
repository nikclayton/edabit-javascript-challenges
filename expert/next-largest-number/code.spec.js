const nextNumber = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nextNumber(7)).toEqual(7);
        expect(nextNumber(19)).toEqual(91);
        expect(nextNumber(217)).toEqual(271);
        expect(nextNumber(899)).toEqual(989);
        expect(nextNumber(989)).toEqual(998);
        expect(nextNumber(1115)).toEqual(1151);
        expect(nextNumber(2345)).toEqual(2354);
        expect(nextNumber(3542)).toEqual(4235);
        expect(nextNumber(5432)).toEqual(5432);
        expect(nextNumber(57812)).toEqual(57821);
        expect(nextNumber(57218)).toEqual(57281);
        expect(nextNumber(58943)).toEqual(59348);
        expect(nextNumber(97410)).toEqual(97410);
        expect(nextNumber(718293)).toEqual(718329);
        expect(nextNumber(618921)).toEqual(619128);
        expect(nextNumber(967432)).toEqual(972346);
        expect(nextNumber(890124)).toEqual(890142);
        expect(nextNumber(9321345)).toEqual(9321354);
        expect(nextNumber(219034567)).toEqual(219034576);
        expect(nextNumber(219876543)).toEqual(231456789);
    });
});
