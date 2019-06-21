const landscapeType = require('./code');

describe('Tests', () => {
    test('2 peaks', () => {
        expect(landscapeType([9, 8, 9, 8])).toEqual('neither');
    });

test('2 peaks + boundary', () => {
        expect(landscapeType([0, -1, -1, 0, -1, -1])).toEqual('neither');
    });

test('2 peaks', () => {
        expect(landscapeType([1, 2, 3, 2, 4, 1])).toEqual('neither');
    });

test('boundary', () => {
        expect(landscapeType([5, 4, 3, 2, 1])).toEqual('neither');
    });

test('boundary', () => {
        expect(landscapeType([1, 2, 3, 4])).toEqual('neither');
    });
    
    test('the tests', () => {
        expect(landscapeType([3, 4, 5, 4, 3])).toEqual('mountain');
        expect(landscapeType([9, 7, 3, 1, 2, 4])).toEqual('valley');
        expect(landscapeType([9, 8, 9])).toEqual('valley');
        expect(landscapeType([1, 3, 5, 4, 3, 2])).toEqual('mountain');
        expect(landscapeType([-1, 0, -1])).toEqual('mountain');
        expect(landscapeType([10, 9, 8, 7, 2, 3, 4, 5])).toEqual('valley');
        expect(landscapeType([350, 100, 200, 400, 700])).toEqual('valley');
        expect(landscapeType([-1, -1, 0, -1, -1])).toEqual('mountain');
    });
});
