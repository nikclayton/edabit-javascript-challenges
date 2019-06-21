const convertDate = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(convertDate('January 9, 2019')).toEqual([1, 9, 2019]);
        expect(convertDate('Jan 9, 2019')).toEqual([1, 9, 2019]);
        expect(convertDate('01/09/2019')).toEqual([1, 9, 2019]);
        expect(convertDate('01-09-2019')).toEqual([1, 9, 2019]);
        expect(convertDate('01.09.2019')).toEqual([1, 9, 2019]);
        expect(convertDate('March 3, 1901')).toEqual([3, 3, 1901]);
        expect(convertDate('Mar 3, 1901')).toEqual([3, 3, 1901]);
        expect(convertDate('03/03/1901')).toEqual([3, 3, 1901]);
        expect(convertDate('03-03-1901')).toEqual([3, 3, 1901]);
        expect(convertDate('03.03.1901')).toEqual([3, 3, 1901]);
        expect(convertDate('August 8, 1666')).toEqual([8, 8, 1666]);
        expect(convertDate('Nov 13, 1533')).toEqual([11, 13, 1533]);
        expect(convertDate('04/15/1789')).toEqual([4, 15, 1789]);
        expect(convertDate('12-23-1111')).toEqual([12, 23, 1111]);
        expect(convertDate('02.28.1832')).toEqual([2, 28, 1832]);
    });
});
