const orderPeople = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(orderPeople([5, 3], 15)).toEqual([[1, 2, 3], [6, 5, 4], [7, 8, 9], [12, 11, 10], [13, 14, 15]]);
        expect(orderPeople([4, 3], 5)).toEqual([[1, 2, 3], [0, 5, 4], [0, 0, 0], [0, 0, 0]]);
        expect(orderPeople([3, 3], 8)).toEqual([[1, 2, 3], [6, 5, 4], [7, 8, 0]]);
        expect(orderPeople([2, 4], 5)).toEqual([[1, 2, 3, 4], [0, 0, 0, 5]]);
        expect(orderPeople([4, 4], 15)).toEqual([[1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12], [0, 15, 14, 13]]);
        expect(orderPeople([4, 4], 12)).toEqual([[1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12], [0, 0, 0, 0]]);
        expect(orderPeople([2, 2], 4)).toEqual([[1, 2], [4, 3]]);
        expect(orderPeople([2, 2], 5)).toEqual('overcrowded');
        expect(orderPeople([2, 2], 3)).toEqual([[1, 2], [0, 3]]);
        expect(orderPeople([3, 4], 1)).toEqual([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
        expect(orderPeople([2, 4], 10)).toEqual('overcrowded');
    });
});
