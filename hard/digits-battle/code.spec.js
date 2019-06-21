const battleOutcome = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(battleOutcome(32531)).toEqual(351);
        expect(battleOutcome(111)).toEqual(1);
        expect(battleOutcome(5289)).toEqual(59);
        expect(battleOutcome(76811)).toEqual(781);
        expect(battleOutcome(3245196)).toEqual(3596);
        expect(battleOutcome(93552129)).toEqual(929);
    });
});
