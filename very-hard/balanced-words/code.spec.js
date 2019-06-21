const balanced = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(balanced('at')).toEqual(false);
        expect(balanced('forgetful')).toEqual(false);
        expect(balanced('vegetation')).toEqual(true);
        expect(balanced('disillusioned')).toEqual(false);
        expect(balanced('abstract')).toEqual(true);
        expect(balanced('clever')).toEqual(false);
        expect(balanced('conditionalities')).toEqual(true);
        expect(balanced('seasoning')).toEqual(true);
        expect(balanced('uptight')).toEqual(false);
        expect(balanced('ticket')).toEqual(false);
        expect(balanced('calculate')).toEqual(false);
        expect(balanced('measure')).toEqual(false);
        expect(balanced('join')).toEqual(false);
        expect(balanced('anesthesiologies')).toEqual(true);
        expect(balanced('command')).toEqual(false);
        expect(balanced('graphite')).toEqual(true);
        expect(balanced('quadratically')).toEqual(true);
        expect(balanced('right')).toEqual(false);
        expect(balanced('fossil')).toEqual(true);
        expect(balanced('sparkling')).toEqual(false);
        expect(balanced('dolphin')).toEqual(true);
        expect(balanced('baseball')).toEqual(true);
        expect(balanced('immense')).toEqual(false);
        expect(balanced('pattern')).toEqual(true);
        expect(balanced('hand')).toEqual(false);
        expect(balanced('radar')).toEqual(true);
        expect(balanced('oven')).toEqual(false);
        expect(balanced('immutability')).toEqual(true);
        expect(balanced('kayak')).toEqual(true);
        expect(balanced('bartender')).toEqual(true);
        expect(balanced('weight')).toEqual(false);
        expect(balanced('lightbulbs')).toEqual(true);
        expect(balanced('tail')).toEqual(true);
    });
});
