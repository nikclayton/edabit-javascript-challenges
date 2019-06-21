const addUp = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(addUp(4)).toEqual(10);
        expect(addUp(13)).toEqual(91);
        expect(addUp(600)).toEqual(180300);
        expect(addUp(392)).toEqual(77028);
        expect(addUp(53)).toEqual(1431);
        expect(addUp(897)).toEqual(402753);
        expect(addUp(23)).toEqual(276);
        expect(addUp(1000)).toEqual(500500);
        expect(addUp(738)).toEqual(272691);
        expect(addUp(100)).toEqual(5050);
        expect(addUp(925)).toEqual(428275);
        expect(addUp(1)).toEqual(1);
        expect(addUp(999)).toEqual(499500);
        expect(addUp(175)).toEqual(15400);
        expect(addUp(111)).toEqual(6216);
    });
});
