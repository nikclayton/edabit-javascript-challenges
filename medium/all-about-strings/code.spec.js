const allAboutStrings = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(allAboutStrings('LASA')).toEqual([4, 'L', 'A', 'AS', '@ index 3']);
        expect(allAboutStrings('Computer')).toEqual([8, 'C', 'r', 'pu', 'not found']);
        expect(allAboutStrings('Science')).toEqual([7, 'S', 'e', 'e', '@ index 5']);
        expect(allAboutStrings('homework')).toEqual([8, 'h', 'k', 'ew', '@ index 5']);
        expect(allAboutStrings('spring')).toEqual([6, 's', 'g', 'ri', 'not found']);
        expect(allAboutStrings('break')).toEqual([5, 'b', 'k', 'e', 'not found']);
        expect(allAboutStrings('programming')).toEqual([11, 'p', 'g', 'a', '@ index 4']);
        expect(allAboutStrings('bad')).toEqual([3, 'b', 'd', 'a', 'not found']);
    });
});
