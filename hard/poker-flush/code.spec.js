const checkFlush = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(checkFlush(['A_S', 'J_H', '7_D', '8_D', '10_D'], ['J_D', '3_D'])).toEqual(true);
        expect(checkFlush(['10_S', '7_S', '9_H', '4_S', '3_S'], ['K_S', 'Q_S'])).toEqual(true);
        expect(checkFlush(['3_S', '10_H', '10_D', '10_C', '10_S'], ['3_S', '4_D'])).toEqual(false);
        expect(checkFlush(['8_H', '10_H', '10_D', 'J_H', '10_S'], ['5_D', 'Q_H'])).toEqual(false);
    });
});
