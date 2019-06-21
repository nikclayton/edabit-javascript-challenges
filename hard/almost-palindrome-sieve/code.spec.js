const palindromeSieve = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(palindromeSieve([443, 12, 639, 121, 3232])).toEqual([443, 121, 3232]);
        expect(palindromeSieve([5, 55, 6655, 8787])).toEqual([5, 55, 6655, 8787]);
        expect(palindromeSieve([897, 89, 23, 54, 6197, 53342])).toEqual([]);
        expect(palindromeSieve([112, 334, 555, 656, 665, 444, 443, 7])).toEqual([112, 334, 555, 656, 665, 444, 443, 7]);
        expect(palindromeSieve([1, 2, 123])).toEqual([1, 2]);
        expect(palindromeSieve([1, 2, 3])).toEqual([1, 2, 3]);
        expect(palindromeSieve([555, 687868877])).toEqual([555, 687868877]);
        expect(palindromeSieve([555, 68786887])).toEqual([555, 68786887]);
    });
});
