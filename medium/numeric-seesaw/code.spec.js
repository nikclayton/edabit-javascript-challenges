const seesaw = require('./code');

describe('Tests', () => {
    test('Return balanced when null.', () => {
        expect(seesaw(undefined)).toEqual('balanced');
    });

test('Return balanced when undefined.', () => {
        expect(seesaw(undefined)).toEqual('balanced');
    });
    
    test('the tests', () => {
        expect(seesaw(3449)).toEqual('right');
        expect(seesaw(1143113)).toEqual('left');
        expect(seesaw(585585)).toEqual('balanced');
        expect(seesaw(11)).toEqual('balanced');
        expect(seesaw(111)).toEqual('balanced');
        expect(seesaw(1)).toEqual('balanced');
        expect(seesaw(5855)).toEqual('left');
        expect(seesaw(5558)).toEqual('right');
    });
});
