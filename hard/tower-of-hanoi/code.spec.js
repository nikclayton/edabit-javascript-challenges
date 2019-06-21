const towerHanoi = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(towerHanoi(3)).toEqual(7);
        expect(towerHanoi(5)).toEqual(31);
        expect(towerHanoi(8)).toEqual(255);
        expect(towerHanoi(19)).toEqual(524287);
        expect(towerHanoi(9)).toEqual(511);
        expect(towerHanoi(13)).toEqual(8191);
        expect(towerHanoi(0)).toEqual(0);
    });
});
