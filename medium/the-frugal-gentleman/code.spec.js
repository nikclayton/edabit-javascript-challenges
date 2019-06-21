const chosenWine = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(chosenWine([{name: 'Wine A', price: 8.99}, {name: 'Wine 32', price: 13.99}, {name: 'Wine 9', price: 10.99}])).toEqual('Wine 9');
        expect(chosenWine([{name: 'Wine A', price: 8.99}, {name: 'Wine B', price: 9.99}])).toEqual('Wine B');
        expect(chosenWine([{name: 'Wine A', price: 8.99}])).toEqual('Wine A');
        expect(chosenWine([])).toEqual(undefined);
        expect(chosenWine([{name: 'Wine A', price: 8.99}, {name: 'Wine 389', price: 109.99}, {name: 'Wine 44', price: 38.44}, {name: 'Wine 72', price: 22.77}])).toEqual('Wine 72');
    });
});
